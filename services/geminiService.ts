import { GoogleGenAI, ChatSession } from "@google/genai";
import { PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system instruction that makes the AI aware of the product catalog
const productContext = PRODUCTS.map(p => 
  `- ${p.name} (ID: ${p.id}): $${p.price}, Category: ${p.category}. Description: ${p.description}`
).join('\n');

const SYSTEM_INSTRUCTION = `
You are Nova, an expert AI fashion stylist for the brand 'Aura'.
We specialize in premium streetwear, specifically heavyweight hoodies, boxy tees, and high-quality basics.
Your tone is cool, sophisticated, helpful, and concise.

Here is our current product catalog:
${productContext}

Rules:
1. Recommend products from the catalog based on user needs (vibe, weather, style).
2. If suggesting a product, strictly use its exact name.
3. You can suggest outfit pairings using only items from the catalog (e.g., pairing a hoodie with cargo joggers).
4. If a user asks about something we don't sell (like formal suits or swimwear), politely redirect them to our available streetwear categories.
5. Keep responses under 80 words unless a detailed styling guide is requested.
6. Do not mention product IDs in the output, just names and prices.
`;

export const createStylistSession = (): ChatSession => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    }
  });
};

export const sendMessageToStylist = async (session: ChatSession, message: string): Promise<string> => {
  try {
    const result = await session.sendMessage({ message });
    return result.text || "I'm having trouble thinking of a style right now. Try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to connect to Nova.");
  }
};