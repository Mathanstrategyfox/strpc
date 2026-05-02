'use server'

import { createTicket } from '@/lib/zoho';

export async function submitTicket(formData: FormData) {
  try {
    const subject = formData.get('subject') as string;
    const description = formData.get('description') as string;
    const email = formData.get('email') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const phone = formData.get('phone') as string;
    const priority = formData.get('priority') as 'Low' | 'Medium' | 'High' | 'Urgent';

    if (!subject || !description || !email || !lastName) {
      return { success: false, error: 'Missing required fields' };
    }

    const result = await createTicket({
      subject,
      description,
      email,
      firstName,
      lastName,
      phone,
      priority,
    });

    return { success: true, ticketNumber: result.ticketNumber };
  } catch (error: any) {
    console.error('Ticket submission error:', error);
    return { success: false, error: error.message || 'An unexpected error occurred' };
  }
}
