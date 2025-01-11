import { decode } from 'jsonwebtoken';

import { HiddenForm } from './hidden-form';

type Token = {
  sub: string;
  email: string;
  name?: string;
  picture?: string;
  exp?: number;
  iat?: number;
  [key: string]: any;
};

type GoogleRedirectPageProps = {
  searchParams: Promise<{ id_token: string }>;
};

const GoogleRedirectPage = async ({
  searchParams,
}: GoogleRedirectPageProps) => {
  const { id_token } = await searchParams;

  const decodedToken = decode(id_token) as Token;

  const username = decodedToken?.email.split('@')[0];
  const email = decodedToken?.email;
  const password = decodedToken?.sub;

  return (
    <div className='flex items-center justify-center h-screen'>
      <HiddenForm username={username} email={email} password={password} />
      <h3 className='animate-pulse text-muted-foreground'>Redirecting...</h3>
    </div>
  );
};

export default GoogleRedirectPage;
