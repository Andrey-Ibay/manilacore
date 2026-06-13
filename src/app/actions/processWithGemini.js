'use server';

import { createClient } from "@/utils/supabase/server";
import { GoogleGenAI } from "@google/genai";

const geminiAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

export async function processWithGemini(image){
    console.log("Gemini Started.");
    const supabase = await createClient();

    // Use Gemini 3.5 Flash
    // For classification
    async function getCategory(prompt) {
        const response = await geminiAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: { thinkingBudget: 2048},
                responseMimeType: "text/plain",
            },
        });

        const text = response.text;
        const match = text.match(/\d+/);
        return match ? parseInt(match[0], 10) : null;
    }

    // --- Pipeline ---
    try {
        // 1. Root
        console.log("Phase 1 began...");
        const { data: rootCats } = await supabase.from("categories").select("id, category_title").is("parent_id", null);
        const rootId = await getCategory(`You are an expert image classification tool. Select the ID of the BEST FITTING CATEGORY for image: ${image}. Choices: ${JSON.stringify(rootCats)}. Output: Strictly an integer of the ID`);
        console.log("Result: ", rootId);

        // 2. Sub
        console.log("Phase 2 began...");
        const { data: subCats } = await supabase.from("categories").select("id, category_title").eq("parent_id", rootId);
        const subId = await getCategory(`You are an expert image classification tool. Select the ID of the BEST FITTING CATEGORY for image: ${image}. Choices: ${JSON.stringify(subCats)}. Output: Strictly an integer of the ID`);
        console.log("Result: ", subId);

        // 3. Items
        console.log("Phase 3 began...");
        const { data: items } = await supabase.from("categories").select("id, category_title").eq("parent_id", subId);
        const itemId = await getCategory(`You are an expert image identification tool. Select the ID of the item that BEST MATCHES the image: ${image}. Choices: ${JSON.stringify(items)}. Output: Strictly an integer of the ID`);
        console.log("Result: ", itemId);

        return itemId;
    } catch (error) {
        console.error("Classification Pipeline Error:", error);
        return null;
    }
}