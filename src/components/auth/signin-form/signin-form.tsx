'use client';

import { useActionState } from 'react';
import Link from 'next/link';

import { loginUserAction } from '@/actions';
import { Logo } from '@/components/shared';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@/components/ui';
import { GoogleIcon } from '@/icons';
import { cn, STRAPI_URL } from '@/lib/utils';
import { StrapiErrors } from '../strapi-errors/strapi-errors';
import { ZodErrors } from '../zod-errors/zod-errors';

export const SignInForm = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  const [state, formAction, isPending] = useActionState(loginUserAction, null);

  return (
    <div
      className={cn('flex max-w-sm flex-col gap-3 p-5', className)}
      {...props}
    >
      <Card>
        <CardHeader className='flex flex-col items-center'>
          <Logo />
          <CardTitle className='py-4 text-center text-xl'>Sign In</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='pb-0'>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-1'>
                <Label htmlFor='identifier' className='text-xs'>
                  Identifier
                </Label>
                <Input
                  id='identifier'
                  name='identifier'
                  type='text'
                  placeholder='John or john@example.com'
                />
                <ZodErrors error={state?.zodErrors?.identifier} />
              </div>
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

              <div className='text-end text-sm text-muted-foreground'>
                <Link
                  href='/forgot-password'
                  className='underline underline-offset-4 hover:text-primary'
                >
                  Forgot password?
                </Link>
              </div>

              <Button type='submit' className='w-full' disabled={isPending}>
                {isPending ? 'Loading...' : 'Sign In'}
              </Button>

              <Button asChild variant='outline'>
                <Link href={`${STRAPI_URL}/api/connect/google`}>
                  <GoogleIcon /> Login with google
                </Link>
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <StrapiErrors error={state?.strapiErrors} />
        </CardFooter>
      </Card>
      <div className='text-center text-sm text-muted-foreground'>
        Don&apos;t have an account?{' '}
        <Link
          href='/signup'
          className='underline underline-offset-4 hover:text-primary'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
