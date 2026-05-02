
import { NextResponse } from 'next/server';
import { 
  groqChat, 
  isPackagingQuery, 
  isQueryComplete, 
  askFollowup, 
  selectMachines, 
  STARPAC_SYSTEM_PROMPT 
} from '@/lib/chatbot';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Step 1: Check if packaging-related
    const packagingRelated = await isPackagingQuery(message);
    if (!packagingRelated) {
      const response = await groqChat(message, STARPAC_SYSTEM_PROMPT);
      return NextResponse.json({ type: 'chat', response });
    }

    // Step 2: Check completeness
    const complete = await isQueryComplete(message);
    if (!complete) {
      const followup = await askFollowup(message);
      return NextResponse.json({ type: 'followup', response: followup });
    }

    // Step 3: Select machines and explain
    const selectedMachines = await selectMachines(message);
    const machines = selectedMachines.map(m => ({
      name: m.name,
      url: m.slug
    }));

    const explanation = await groqChat(`
      As the Starpac Sales Assistant, explain why these machines are the perfect solution for the user's requirement: "${message}".
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
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
