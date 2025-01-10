import { STRAPI_URL } from '@/lib/utils';

type forgotPasswordServiceProps = {
  email: string;
};

export const forgotPasswordService = async (
  emailData: forgotPasswordServiceProps,
) => {
  const url = new URL('/api/auth/forgot-password', STRAPI_URL);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...emailData }),
    });

    return response.json();
  } catch (error) {
    console.error('Forgot password service Error:', error);
  }
};
