
import { GoogleGenAI } from "@google/genai";

export const getMarketingAdvice = async (userPrompt: string) => {
  try {
    // Always use new GoogleGenAI({apiKey: process.env.API_KEY})
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    // Using gemini-3-flash-preview for basic text task as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the Lead Marketing Strategist at HELIO, a premier marketing agency in the UAE. 
        Your tone is sophisticated, professional, data-driven, and innovative. 
        You specialize in the Middle Eastern market, specifically luxury brands, real estate, and tech startups in Dubai and Abu Dhabi.
        Provide concise, actionable marketing advice or campaign ideas based on the user's input.
        Always maintain the HELIO brand voice: "Illuminating the path to growth."`,
        temperature: 0.8,
      },
    });

    // Directly access .text property from GenerateContentResponse
    return response.text || "I'm sorry, I couldn't generate a strategy right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the HELIO AI Strategist. Please try again later.";
  }
};
