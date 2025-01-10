'use client';

import { useActionState } from 'react';

import { resetPasswordAction } from '@/actions';
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

type ResetPasswordFormProps = {
  code: string;
  className?: string;
};

export const ResetPasswordForm = ({
  code,
  className,
}: ResetPasswordFormProps) => {
  const [state, formAction, isPending] = useActionState(
    resetPasswordAction,
    null,
  );

  return (
    <div className={cn('flex flex-col gap-3 p-5 max-w-sm', className)}>
      <Card>
        <CardHeader className='flex flex-col items-center'>
          <Logo />
          <CardDescription className='py-5'>
            Please enter the new password and confirm.
          </CardDescription>
        </CardHeader>
        <CardContent className='pb-0'>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <input type='hidden' id='code' name='code' defaultValue={code} />

              <div className='grid gap-1'>
                <Label htmlFor='password' className='text-xs'>
                  Password
                </Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='***********'
                />
                <ZodErrors error={state?.zodErrors?.password} />
              </div>

              <div className='grid gap-1'>
                <Label htmlFor='passwordConfirmation' className='text-xs'>
                  Password confirmation
                </Label>
                <Input
                  id='passwordConfirmation'
                  name='passwordConfirmation'
                  type='password'
                  placeholder='***********'
                />
                <ZodErrors error={state?.zodErrors?.passwordConfirmation} />
              </div>

              <Button type='submit' className='w-full' disabled={isPending}>
                {isPending ? 'Sending...' : 'Reset password'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
