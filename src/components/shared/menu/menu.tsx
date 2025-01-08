import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { MenuIcon } from '@/icons';

import { Nav } from '../nav';
import { Search } from '../search';

export const Menu = () => {
  return (
    <div className='md:hidden w-6 h-6'>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='pb-4'>Menu</SheetTitle>
          </SheetHeader>

          <Search />

          <Nav className='flex-col py-4' />
        </SheetContent>
      </Sheet>
    </div>
  );
};
