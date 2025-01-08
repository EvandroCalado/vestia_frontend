'use server';

import { registerUserService } from '@/services';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const registerSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username must be between 3 and 20 characters',
    })
    .max(20, {
      message: 'Username must be between 3 and 20 characters',
    }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be between 6 and 100 characters',
    })
    .max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
});

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: '/',
  domain: process.env.HOST ?? 'localhost',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
};

export const registerUserAction = async (
  prevState: any,
  formData: FormData,
) => {
  const { username, email, password } = Object.fromEntries(formData);

  const validatedFields = registerSchema.safeParse({
    username,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Missing fields. Failed to register.',
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: 'Ops! Something went wrong. Please try again.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: 'Failed to Register.',
    };
  }

  const cookieStore = await cookies();
  cookieStore.set('jwt', responseData.jwt, config);

  redirect('/dashboard');
};
