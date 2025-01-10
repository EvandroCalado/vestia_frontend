import { STRAPI_URL } from '@/lib/utils';

type resetPasswordServiceProps = {
  code: string;
  password: string;
  passwordConfirmation: string;
};

export const resetPasswordService = async (
  resetData: resetPasswordServiceProps,
) => {
  const url = new URL('/api/auth/reset-password', STRAPI_URL);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...resetData }),
    });

    return response.json();
  } catch (error) {
    console.error('Reset password service Error:', error);
  }
};
