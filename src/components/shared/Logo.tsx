import { cn } from '@/lib/utils';
import { Fingerprint } from 'lucide-react';
import Link from 'next/link';

import { Button } from '../ui';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn(
        'flex items-center gap-2 text-xl text-white font-semibold',
        className,
      )}
    >
      <Button size='icon'>
        <Fingerprint />
      </Button>
      <span className='max-md:hidden'>Strapi Auth</span>
    </Link>
  );
};
