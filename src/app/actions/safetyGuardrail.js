'use server';

import { GoogleGenAI } from "@google/genai";

const geminiAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY });

export async function safetyGuardrail(formData){
    console.log("Guardrail Started.");

    const file = formData.get("file");
    const arrayBuffer = await file.arrayBuffer();
  
    // Convert buffer to base64 for Gemini
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    // Use Gemini 3.1 Flash Lite
    // As Guardrail
    const response = await geminiAI.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: [
            {
                role: "user",
                parts: [
                    { text: "Is this image safe? Strictly output only SAFE or UNSAFE." },
                    { inlineData: { data: base64Image, mimeType: file.type } }
                ]
            }
        ]
    });
    return response.text.includes("SAFE");
    
}