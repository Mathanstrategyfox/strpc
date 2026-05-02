// In-memory cache for the access token
let cachedToken: { token: string; expiry: number } | null = null;

const REFRESH_TOKEN = process.env.NEXT_PUBLIC_ZOHO_REFRESH_TOKEN;
const CLIENT_ID = process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_ZOHO_CLIENT_SECRET;
const ACCOUNTS_URL = process.env.NEXT_PUBLIC_ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.in';
const BASE_URL = process.env.NEXT_PUBLIC_ZOHO_BASE_URL || 'https://desk.zoho.in/api/v1';
const ORG_ID = process.env.NEXT_PUBLIC_ZOHO_ORG_ID;

export async function getAccessToken() {
  // Check if we have a valid cached token
  if (cachedToken && Date.now() < cachedToken.expiry) {
    return cachedToken.token;
  }
  console.log('Refreshing Zoho access token...');

  const response = await fetch(`${ACCOUNTS_URL}/oauth/v2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token: REFRESH_TOKEN!,
      client_id: CLIENT_ID!,
      client_secret: CLIENT_SECRET!,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Failed to refresh Zoho token:', data);
    throw new Error(`Zoho token refresh failed: ${data.error || response.statusText}`);
  }

  // Cache the token, setting expiry slightly earlier to be safe (e.g., 55 minutes)
  cachedToken = {
    token: data.access_token,
    expiry: Date.now() + (data.expires_in || 3600) * 1000 - 300000, // 5 min buffer
  };

  return data.access_token;
}

export async function createTicket(details: {
  subject: string;
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  departmentId?: string;
  priority?: 'Low' | 'Medium' | 'High' | 'Urgent';
}) {
  const accessToken = await getAccessToken();
  const departmentId = details.departmentId || process.env.NEXT_PUBLIC_ZOHO_DEPARTMENT_ID;

  const response = await fetch(`${BASE_URL}/tickets`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'orgId': ORG_ID!,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      subject: details.subject,
      description: details.description,
      departmentId: departmentId,
      priority: details.priority || 'Medium',
      contact: {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        phone: details.phone,
      },
      channel: 'Web',
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Failed to create Zoho ticket:', data);
    throw new Error(`Zoho ticket creation failed: ${data.message || response.statusText}`);
  }

  return data;
}
