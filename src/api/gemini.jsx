import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) throw new Error("Missing Gemini API key. Check your .env file.");

export const ai = new GoogleGenAI({ apiKey });

export async function fetchDescription(location) {
  const prompt = `
  You are a weather travel assistant. Given the following information, return a JSON object with a single field: "description" (a brief description of the location).

  Location: ${location}

  Respond ONLY with a valid JSON object in this format:
  {
    "description": "..."
  }

  Do not wrap with code blocks.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const description = JSON.parse(response.text);
    return description;
  } catch (error) {
    console.error("Error fetching Gemini description:", error);
    return "";
  }
}

