
import { machinesData, companyKnowledge } from './machines-data';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function groqChat(prompt: string, systemMessage?: string) {
  if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is missing. Please set it in your environment variables.");
  }

  const messages: any[] = [];
  if (systemMessage) {
    messages.push({ role: "system", content: systemMessage });
  }
  messages.push({ role: "user", content: prompt });

  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Groq API error:", err);
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export const STARPAC_SYSTEM_PROMPT = `
You are the official Sales Assistant for "Starpac India". Your goal is to suggest the perfect packaging machines based on user needs and explain their benefits.

Company Information:
${JSON.stringify(companyKnowledge, null, 2)}

Our Machine Catalogue & Technical Data:
${JSON.stringify(machinesData, null, 2)}

Rules:
1. Be friendly, professional, and enthusiastic about Starpac's engineering excellence.
2. When suggesting a machine, you MUST use its EXACT NAME from the "Machine Catalogue" below and wrap it in double asterisks, like this: **[Exact Machine Name]**.
3. IMPORTANT: Do NOT use model numbers (e.g., PS 360, HS 190) or abbreviations (e.g., PFS 1 & 2) as the primary name. Only use the full names provided in the JSON list (e.g., **single-lane-intermittent-motion-baggers**).
4. CRITICAL: The bolded name must be the ONLY way you mention the machine at the start of your explanation. For example: "1. **single-lane-intermittent-motion-baggers**: This machine is..."
5. Use the provided Technical Data to explain WHY a machine is suitable.
6. If a user asks a generic question, pivot back to production needs: "I'd be happy to discuss that! To recommend the best packaging solution, could you tell me what product you are packing and your target speed?"
7. Keep responses concise and sales-focused.
`;

export async function isPackagingQuery(query: string) {
  const prompt = `Determine if this query is about packaging machines or production needs: "${query}". Answer ONLY YES or NO.`;
  const res = await groqChat(prompt);
  return res.toUpperCase().includes("YES");
}

export async function isQueryComplete(query: string) {
  const prompt = `Does this query specify BOTH the product type (e.g. sugar, oil) and the format (e.g. pouch, jar)? Query: "${query}". Answer ONLY YES or NO.`;
  const res = await groqChat(prompt);
  return res.toUpperCase().includes("YES");
}

export async function askFollowup(query: string) {
  const prompt = `The user is interested in: "${query}". Ask a polite, professional follow-up question to find out their product type, pack weight, or target speed.`;
  return await groqChat(prompt, STARPAC_SYSTEM_PROMPT);
}

export async function selectMachines(query: string) {
  const options = machinesData.map(m => `${m.name}: ${m.description}`).join("\n");
  const prompt = `User needs: "${query}". \nOptions:\n${options}\nPick the 2 most relevant machine names. Return ONLY the names separated by a comma.`;
  const res = await groqChat(prompt);
  const selected = res.split(",").map((s: string) => s.trim());
  return machinesData.filter(m => selected.some((name: string) => m.name.toLowerCase().includes(name.toLowerCase())));
}
