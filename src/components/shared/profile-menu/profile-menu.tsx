import { use } from 'react';

import { getAuthToken } from '@/actions';
import { Button } from '@/components/ui';
import { ProfileIcon } from '@/icons';
import Link from 'next/link';

export const ProfileMenu = () => {
  const user = use(getAuthToken());

  return (
    <div>
      {user ? (
        <ProfileIcon />
      ) : (
        <Button asChild>
          <Link href='/signin'>Sign In</Link>
        </Button>
      )}
    </div>
  );
};
