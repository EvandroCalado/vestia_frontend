import { CartMenu } from '@/components/cart';
import { Logo } from '../logo';
import { Menu } from '../menu';
import { Nav } from '../nav';
import { PopUpHeader } from '../pop-up-header';
import { ProfileMenu } from '../profile-menu';
import { Search } from '../search';

const items = [
  {
    id: 1,
    title: 'raw black t-shirt lineup',
    image: '/images/product1.png',
    color: 'black',
    size: 'm',
    price: 75,
    quantity: 1,
  },
  {
    id: 2,
    title: 'essential neutrals',
    image: '/images/product2.png',
    color: 'white',
    size: 's',
    price: 22,
    quantity: 1,
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
          <CartMenu items={items} />
          <ProfileMenu />
          <Menu />
        </div>
      </header>
    </>
  );
};
