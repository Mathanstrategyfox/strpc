
import { NextResponse } from 'next/server';
import { 
  groqChat, 
  selectMachines, 
  STARPAC_SYSTEM_PROMPT 
} from '@/lib/chatbot';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // For follow-up, we directly go to machine selection as the user has provided more info
    const selectedMachines = await selectMachines(message);
    const machines = selectedMachines.map(m => ({
      name: m.name,
      url: m.slug
    }));

    const explanation = await groqChat(`
      As the Starpac Sales Assistant, explain why these machines are the perfect solution for the user's follow-up request: "${message}".
      Focus on the benefits and technical suitability.

      CRITICAL FORMATTING INSTRUCTION:
      You MUST format your response as a numbered list where each point starts EXACTLY with the machine's name wrapped in bold asterisks, like this:
      1. **[Machine Name]**: [Your professional sales-oriented explanation...]

      Do NOT use custom headings. The bolded text MUST be the exact machine name provided below.
      Machines: ${machines.map(m => m.name).join(", ")}
    `, STARPAC_SYSTEM_PROMPT);

    return NextResponse.json({
      type: 'machines',
      response: explanation,
      machines: machines
    });

  } catch (error: any) {
    console.error('Followup API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
