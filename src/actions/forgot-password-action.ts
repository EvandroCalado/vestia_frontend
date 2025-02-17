'use server';

import { forgotPasswordService } from '@/services';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email()
    .min(3, { message: 'Identifier must have at least 3 or more characters' })
    .max(100, {
      message: 'Please enter a valid username or email address',
    }),
});

export const forgotPasswordAction = async (
  prevState: any,
  formData: FormData,
) => {
  const { email } = Object.fromEntries(formData);

  const validatedFields = forgotPasswordSchema.safeParse({
    email,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid email.',
    };
  }

  const responseData = await forgotPasswordService(validatedFields.data);

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

  return { ok: true, data: responseData, error: null };
};
