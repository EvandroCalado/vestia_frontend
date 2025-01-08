import { Input } from '@/components/ui';
import { CartIcon, ProfileIcon } from '@/icons';
import { navLinks } from '@/lib/utils';
import Link from 'next/link';

import { Logo } from '../logo';

export const Header = () => {
  return (
    <header className='container p-5 mx-auto flex items-center justify-between'>
      <Logo />

      <nav className='flex items-center gap-4 text-muted-foreground max-md:hidden'>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <Input
        type='search'
        placeholder='Search products'
        className='w-56 lg:w-72 max-md:hidden'
      />

      <div className='flex items-center gap-4 max-md:hidden'>
        <CartIcon />
        <ProfileIcon />
      </div>
    </header>
  );
};
