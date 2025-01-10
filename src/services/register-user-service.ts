import { STRAPI_URL } from '@/lib/utils';

type RegisterUserProps = {
  username: string;
  password: string;
  email: string;
};

export const registerUserService = async (userData: RegisterUserProps) => {
  const url = new URL('/api/auth/local/register', STRAPI_URL);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json();
  } catch (error) {
    console.error('Registration Service Error:', error);
  }
};
