import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image src='/logo.svg' alt='Logo' width={40} height={40} priority />
      <span className='text-2xl font-bold'>Vestia</span>
    </Link>
  );
};
