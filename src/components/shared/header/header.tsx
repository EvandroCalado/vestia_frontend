import { CartMenu } from '@/components/cart';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Nav } from '../nav';
import { PopUpHeader } from '../pop-up-header';
import { ProfileMenu } from '../profile-menu';
import { Search } from '../search';

const cartItems = [
  {
    id: 400,
    image: '/images/product1.png',
    title: 'raw black t-shirt lineup',
    quantity: 2,
    price: 75,
    size: 'm',
  },
  {
    id: 4001,
    image: '/images/product2.png',
    title: 'Essential Neutrals',
    quantity: 3,
    price: 22,
    size: 's',
  },
];

export const Header = () => {
  return (
    <>
      <PopUpHeader />
      <header className='container mx-auto flex items-center justify-between p-5'>
        <Logo />

        <Nav className='max-md:hidden' />

        <Search className='max-md:hidden' />

        <div className='flex items-center gap-4'>
          <CartMenu cartItems={cartItems} />
          <ProfileMenu />
          <Menu />
        </div>
      </header>
    </>
  );
};
