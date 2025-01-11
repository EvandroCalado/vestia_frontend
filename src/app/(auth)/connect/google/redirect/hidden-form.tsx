'use client';

import { useActionState, useEffect } from 'react';

import { loginSocialAction } from '@/actions';

type HiddenFormProps = {
  username: string;
  email: string;
  password: string;
};

export const HiddenForm = ({ username, email, password }: HiddenFormProps) => {
  const [state, formAction] = useActionState(loginSocialAction, null);

  useEffect(() => {
    const submitButton = document.getElementById(
      'submit-button',
    ) as HTMLButtonElement;
    if (submitButton) {
      submitButton.click();
    }
  }, []);

  return (
    <form action={formAction}>
      <input type='hidden' name='username' defaultValue={username} />
      <input type='hidden' name='email' defaultValue={email} />
      <input type='hidden' name='password' defaultValue={password} />
      <button type='submit' id='submit-button' className='hidden' />
    </form>
  );
};
