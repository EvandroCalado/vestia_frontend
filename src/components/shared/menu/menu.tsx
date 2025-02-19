import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { MenuIcon } from '@/icons';
import { Nav } from '../nav';

export const Menu = () => {
  return (
    <div className='h-6 w-6 md:hidden'>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='pb-4'>Menu</SheetTitle>
          </SheetHeader>

          <Nav className='flex-col py-4' />
        </SheetContent>
      </Sheet>
    </div>
  );
};
