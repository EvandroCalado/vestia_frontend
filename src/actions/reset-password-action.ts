'use server';

import { resetPasswordService } from '@/services/reset-password-service';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const resetPasswordSchema = z
  .object({
    code: z.string(),
    password: z.string().min(6, {
      message: 'Password must be between 6 and 100 characters',
    }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ['passwordConfirmation'],
    message: 'Password no match',
  });

export const resetPasswordAction = async (
  prevState: any,
  formData: FormData,
) => {
  const { code, password, passwordConfirmation } = Object.fromEntries(formData);

  const validatedFields = resetPasswordSchema.safeParse({
    code,
    password,
    passwordConfirmation,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: 'Password invalid.',
    };
  }

  const responseData = await resetPasswordService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: 'Ops! Something went wrong. Please try again.',
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: 'Email not registered.',
    };
  }

  redirect('/signin');
};
