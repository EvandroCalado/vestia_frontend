import { CartMenu } from '@/components/cart';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Nav } from '../nav';
import { PopUpHeader } from '../pop-up-header';
import { ProfileMenu } from '../profile-menu';

export const Header = () => {
  return (
    <>
      <PopUpHeader />
      <header className='container mx-auto flex items-center justify-between p-5'>
        <Logo />
        <Nav className='max-md:hidden' />

        <div className='flex items-center gap-4'>
          <CartMenu />
          <ProfileMenu />
          <Menu />
        </div>
      </header>
    </>
  );
};
