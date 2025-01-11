'use server';

import { loginUserService, registerUserService } from '@/services';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const loginSocialActionSchema = z.object({
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

export const loginSocialAction = async (prevState: any, formData: FormData) => {
  const { username, email, password } = Object.fromEntries(formData);

  const validatedFields = loginSocialActionSchema.safeParse({
    username,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields.',
    };
  }

  const register = await registerUserService(validatedFields.data);

  if (
    register?.error?.status === 400 &&
    register?.error?.message === 'Email or Username are already taken'
  ) {
    const { email, password } = validatedFields.data;

    const login = await loginUserService({ identifier: email, password });

    const cookieStore = await cookies();
    cookieStore.set('jwt', login.jwt, config);

    redirect('/dashboard');
  }

  const cookieStore = await cookies();
  cookieStore.set('jwt', register.jwt, config);

  redirect('/dashboard');
};
