import Link from 'next/link';

import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { CartIcon } from '@/icons';
import { Cart, CartItems } from '../cart-items';

type CartMenuProps = {
  items: Cart[];
};

export const CartMenu = ({ items }: CartMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <CartIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='pb-4'>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className='flex h-full flex-col justify-between pb-12'>
          <div className='last-of-type:[&>div]:border-none'>
            <CartItems items={items} onMenu={true} />
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-between text-sm'>
              <span>Total</span>
              <span>$97.00</span>
            </div>

            <SheetClose asChild className='w-full'>
              <Button className='w-full' asChild>
                <Link href='/cart'>View cart</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
