import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('flex items-center gap-2', className)}>
      <Image src='/logo.svg' alt='Logo' width={40} height={40} priority />
      <span className='text-2xl font-bold'>Vestia</span>
    </Link>
  );
};
