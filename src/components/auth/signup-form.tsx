'use client';

import { useActionState } from 'react';

import { registerUserAction } from '@/actions';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '../ui';
import { StrapiErrors } from './strapi-errors';
import { ZodErrors } from './zod-errors';

export const SignUpForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    null,
  );

  return (
    <div
      className={cn('flex flex-col gap-3 p-5 max-w-sm', className)}
      {...props}
    >
      <Card>
        <CardHeader className='relative flex flex-col items-center'>
          <Button asChild className='absolute left-0 -top-14'>
            <Link href='/'>
              <ArrowLeft />
              Back
            </Link>
          </Button>
          <CardTitle className='text-2xl text-center'>Sign Up</CardTitle>
          <CardDescription>
            Enter your details to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent className='pb-0'>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Username
                </Label>
                <Input
                  id='username'
                  name='username'
                  type='text'
                  placeholder='username'
                />
                <ZodErrors error={state?.zodErrors?.username} />
              </div>
              <div className='grid gap-1'>
                <Label htmlFor='email' className='text-xs'>
                  Email
                </Label>
                <Input
                  id='email'
                  name='email'
                  type='text'
                  placeholder='email'
                />
                <ZodErrors error={state?.zodErrors?.email} />
              </div>
              <div className='grid gap-1'>
                <Label htmlFor='password' className='text-xs'>
                  Password
                </Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='password'
                />
                <ZodErrors error={state?.zodErrors?.password} />
              </div>
              <Button type='submit' className='w-full' disabled={isPending}>
                {isPending ? 'Loading...' : 'Sign Up'}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <StrapiErrors error={state?.strapiErrors} />
        </CardFooter>
      </Card>
      <div className='text-sm text-center text-muted-foreground'>
        Have an account?{' '}
        <Link
          href='/signin'
          className='underline underline-offset-4 hover:text-primary'
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};
