import { use } from 'react';

import { getAuthTokenAction, logoutUserAction } from '@/actions';
import { Button } from '@/components/ui';
import Link from 'next/link';

export const ProfileMenu = () => {
  const user = use(getAuthTokenAction());

  return (
    <div>
      {user ? (
        // <ProfileIcon />
        <form action={logoutUserAction}>
          <Button>Logout</Button>
        </form>
      ) : (
        <Button asChild>
          <Link href='/signin'>Sign In</Link>
        </Button>
      )}
    </div>
  );
};
