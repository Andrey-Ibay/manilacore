'use server';

import { createClient } from "@/utils/supabase/server";
import { GoogleGenAI } from "@google/genai";


const geminiAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

export async function processWithGemini(imageFile){
    console.log("Gemini Started.");
    
    const supabase = await createClient();

    // Converts image to base 64 data
    const arrayBuffer = await imageFile.arrayBuffer();
    const image = Buffer.from(arrayBuffer).toString('base64');

    const mimeType = imageFile.type;

    console.log("base64: ", image);
    console.log("mimeType: ", mimeType);

    function thinkingLvl(modelName){
        if(modelName.includes("3.5") || modelName.includes("3.1")){
            return { thinkingLevel : "medium" };
        }
        return { thinkingBudget: 2048 }
    }
    // Use Gemini 3.5 Flash
    // For classification
    async function getCategory(prompt, imageInput, mime, phase) {
        //Switch between models
        const models = {
            1: "gemini-3.1-flash-lite",
            2: "gemini-2.5-flash",
            3: "gemini-3.5-flash"
        };

        const response = await geminiAI.models.generateContent({
            model: models[phase],
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                data: imageInput,
                                mimeType: mime
                            }
                        }
                    ]
                }
            ],
            config: {
                thinkingConfig: thinkingLvl(models[phase]),
                responseMimeType: "application/json",
            },
        });

        const text = response.text;
        const result = JSON.parse(text);
        return (result.id === 0) ? null : result.id;
    }

    // --- Pipeline ---
    try {
        // 1. Root
        console.log("Phase 1 began...");
        const { data: rootCats } = await supabase.from("categories").select("id, category_title").is("parent_id", null).not("id", "in", '(1,2,3)');
        const rootId = await getCategory(`
            You are a precise classification engine. 
            - You must analyze the image content relative to the provided category list.
            - If the image does not fit any category, output {"id": 0}.
            - Output ONLY a valid JSON object in the format: {"id": <integer>}.
            - Do not include any text outside the JSON object.
            

            ### Example:
            Input Choices: [{"id": 1, "category_title": "food"}, {"id": 2, "category_title": "tools"}]
            Image Content: A red apple.
            Output: {"id": 1}

            ### Current Task:
            Choices: ${JSON.stringify(rootCats)}.
            Output:`, image, mimeType, 1);
        console.log("Result: ", rootId);

        // 2. Sub
        console.log("Phase 2 began...");
        const { data: subCats } = await supabase.from("categories").select("id, category_title").eq("parent_id", rootId);
        const subId = await getCategory(`
            You are a precise classification engine. 
            - You must analyze the image content relative to the provided category list.
            - If the image does not fit any category, output {"id": 0}.
            - Output ONLY a valid JSON object in the format: {"id": <integer>}.
            - Do not include any text outside the JSON object.
            

            ### Example:
            Input Choices: [{"id": 5, "category_title": "fruit"}, {"id": 6, "category_title": "meat"}]
            Image Content: A red apple.
            Output: {"id": 5}

            ### Current Task:
            Choices: ${JSON.stringify(subCats)}.
            Output:`, image, mimeType, 2);
        console.log("Result: ", subId);


        return subId;
    } catch (error) {
        console.error("Classification Pipeline Error:", error);
        return null;
    }
}