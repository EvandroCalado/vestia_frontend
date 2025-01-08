import { CartIcon, ProfileIcon } from '@/icons';

import { Logo } from '../logo';
import { Menu } from '../menu';
import { Nav } from '../nav';
import { Search } from '../search';

export const Header = () => {
  return (
    <header className='container p-5 mx-auto flex items-center justify-between'>
      <Logo />

      <Nav className='max-md:hidden' />

      <Search className='max-md:hidden' />

      <div className='flex items-center gap-4'>
        <CartIcon />
        <ProfileIcon />
        <Menu />
      </div>
    </header>
  );
};
