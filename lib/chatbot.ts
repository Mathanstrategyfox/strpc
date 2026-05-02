
const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || process.env.GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function groqChat(prompt: string, systemMessage?: string) {
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
You are the official Sales Assistant for "Starpac India", a leading global manufacturer of high-performance packaging machinery with over 25 years of engineering excellence.

Your goal is to suggest the perfect packaging machines based on user needs and explain their benefits. You are proactive and sales-oriented.

Our Machines & Categories:
1. Pouch Packaging (VFFS):
   - Single Lane (PS 360/550/820): Ideal for powders, granules, and small solids.
   - Multilane (HS 360/550): High-speed sachet packing for liquids, pastes, and powders.
   - Multitrack (MT/MTD 600/1200): Continuous motion for maximum output (up to 1200 pouches/min).
2. Filling & Capping:
   - Standalone Fillers (Orion AF): Precision auger fillers for powders and volumetric fillers for liquids.
   - Jar/Cup Fillers (JFS 1/2): Rotary and Linear systems for filling and sealing jars, cups, and cans.
3. Flow Wrappers:
   - MW Series (MW 240/550/820): Horizontal wrappers for biscuits, cakes, and soap bars.
   - MCW 300: Continuous motion for high-speed confectionery packing.
4. Special Solutions:
   - Vacuum Chamber Machines: For shelf-life extension of food products.
   - Pick-Fill-Seal (PFS): Pre-made pouch filling systems.

Rules:
1. Be friendly, professional, and enthusiastic.
2. When suggesting a machine, provide a brief description and ALWAYS include the machine's name in bold, like this: **[Machine Name]**.
3. Use bold text for emphasis. Keep responses concise and engaging.
4. If a user asks a generic question, steer back to their production needs: "I can certainly help with that! To suggest the best machine, what kind of product are you looking to pack, and what is your target production speed?"
5. Always ask for: Product Type, Pack Weight, and Production Speed if they haven't mentioned them.
`;

export const MACHINES_LIST = [
  { name: "PS 360 Single Lane VFFS", slug: "/single-lane-intermittent-motion-baggers", desc: "Intermittent motion VFFS for small to medium pouches." },
  { name: "HS 550 Multilane VFFS", slug: "/multilane-intermittent-motion-baggers", desc: "High-speed multilane sachet machine." },
  { name: "MT 1200 Multitrack", slug: "/multitrack-intermittent-continuous-motion-baggers", desc: "Continuous motion multitrack for ultra-high speed." },
  { name: "JFS 1 Rotary Jar Filler", slug: "/rotary-and-linear-jarcupcan-fill-and-close-machines", desc: "Automatic rotary filling and capping for jars/cups." },
  { name: "MW 550 Flow Wrapper", slug: "/intermittent-and-continuous-motion-flow-wrappers", desc: "Horizontal flow wrapper for biscuits and bakery." },
  { name: "Orion AF Auger Filler", slug: "/standalone-fillers", desc: "Precise powder dosing system." },
  { name: "Vacuum Chamber Machine", slug: "/plc-based-vacuum-chamber-machine", desc: "For vacuum packaging of meat, cheese, and vegetables." },
  { name: "PFS Pouch Machine", slug: "/pick-fill-and-seal-and-horizontal-form-fill-and-seal", desc: "Rotary Pick-Fill-Seal for pre-made pouches." }
];

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
  return await groqChat(prompt);
}

export async function selectMachines(query: string) {
  const options = MACHINES_LIST.map(m => `${m.name}: ${m.desc}`).join("\n");
  const prompt = `User needs: "${query}". \nOptions:\n${options}\nPick the 2 most relevant machine names. Return ONLY the names separated by a comma.`;
  const res = await groqChat(prompt);
  const selected = res.split(",").map((s: string) => s.trim());
  return MACHINES_LIST.filter(m => selected.some(name => m.name.toLowerCase().includes(name.toLowerCase())));
}
