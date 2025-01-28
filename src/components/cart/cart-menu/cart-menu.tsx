'use client';

import Link from 'next/link';

import { Loading } from '@/components/shared';
import {
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { useLoaded } from '@/hooks';
import { CartIcon } from '@/icons';
import { useCartStore } from '@/stores';
import { currencyFormat } from '@/utils';
import { CartItems } from '../cart-items';

export const CartMenu = () => {
  const loaded = useLoaded();
  const { getSummaryInfo } = useCartStore();
  const { total, totalProductsInCart } = getSummaryInfo();

  if (!loaded) {
    return <Loading />;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <CartIcon />
          <span className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-1 text-xs text-white'>
            {totalProductsInCart}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='pb-4'>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Items list</SheetDescription>
        </SheetHeader>
        <div className='flex h-full flex-col justify-between pb-16'>
          <div className='last-of-type:[&>div]:border-none'>
            <CartItems onMenu={true} />
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-between text-sm'>
              <span>Total</span>
              <span>{currencyFormat(total)}</span>
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
