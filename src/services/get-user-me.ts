import { getAuthToken } from '@/actions';
import { STRAPI_URL } from '@/lib/utils';

export const getUserMe = async () => {
  const url = new URL('/api/users/me', STRAPI_URL);

  const authToken = await getAuthToken();

  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      cache: 'no-cache',
    });

    const data = await response.json();

    if (data.error) return { ok: false, data: null, error: data.error };

    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
};
