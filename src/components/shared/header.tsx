import { use } from 'react';

import { logoutUser } from '@/actions';
import { getUserMe } from '@/services';
import Link from 'next/link';

import { Button } from '../ui';
import { Logo } from './Logo';

export const Header = () => {
  const user = use(getUserMe());

  return (
    <header className='p-5'>
      <div className='flex relative items-center justify-between max-w-[900px] mx-auto bg-black/30 p-5 rounded-2xl'>
        <Logo />

        <nav className='absolute left-1/2 -translate-x-1/2 flex items-center gap-4 text-white'>
          <Link href='/'>Home</Link>
          <Link href='/dashboard'>Dashboard</Link>
        </nav>

        {user.data ? (
          <form action={logoutUser}>
            <Button>Logout</Button>
          </form>
        ) : (
          <Button asChild>
            <Link href='/signin'>Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
};
