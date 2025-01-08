import { STRAPI_URL } from '@/lib/utils';

type LoginUserProps = {
  identifier: string;
  password: string;
};

export const loginUserService = async (userData: LoginUserProps) => {
  const url = new URL('/api/auth/local', STRAPI_URL);

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
    console.error('login Service Error:', error);
  }
};
