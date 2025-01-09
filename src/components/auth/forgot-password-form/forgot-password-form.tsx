'use client';

import { useActionState } from 'react';

import { ForgotPasswordAction } from '@/actions';
import { Logo } from '@/components/shared';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  Input,
  Label,
} from '@/components/ui';
import { cn } from '@/lib/utils';

import { ZodErrors } from '../zod-errors';

export const ForgotPasswordForm = ({ className }: { className?: string }) => {
  const [state, formAction, isPending] = useActionState(
    ForgotPasswordAction,
    null,
  );

  if (state?.ok) {
    return (
      <div className='flex flex-col items-center justify-center gap-8'>
        <Logo />
        <h3 className='text-muted-foreground'>Please check you email</h3>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-3 p-5 max-w-sm', className)}>
      <Card>
        <CardHeader className='flex flex-col items-center'>
          <Logo />
          <CardDescription className='py-5'>
            Please enter the email address associated with your account. We'll
            promptly send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent className='pb-0'>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='email@example.com'
                />
                <ZodErrors error={state?.zodErrors?.identifier} />
              </div>

              <Button type='submit' className='w-full' disabled={isPending}>
                {isPending ? 'Sending...' : 'Send reset link'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
