import Image from 'next/image';

import { MinusIcon, PlusIcon } from 'lucide-react';

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui';
import { CartIcon, CloseIcon } from '@/icons';
import { currencyFormat } from '@/utils';

type CartItems = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
  size: string;
};

type CartMenuProps = {
  cartItems: CartItems[];
};

export const CartMenu = ({ cartItems }: CartMenuProps) => {
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
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className='my-8 flex w-full gap-2 border-b'
              >
                <div className='relative'>
                  <CloseIcon className='absolute left-0 top-0 cursor-pointer rounded-sm bg-gray-200 duration-150 hover:bg-gray-300' />
                  <Image
                    src={cartItem.image}
                    alt={cartItem.title}
                    width={70}
                    height={70}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-contain'
                  />
                </div>

                <div className='space-y-4'>
                  <h6 className='text-sm capitalize'>{cartItem.title}</h6>

                  <div className='flex items-center gap-4'>
                    <div className='flex w-max items-center gap-4 rounded-sm border'>
                      <MinusIcon className='h-8 w-8 p-2' />
                      <span>1</span>
                      <PlusIcon className='h-8 w-8 p-2' />
                    </div>

                    <span className='text-sm'>
                      {currencyFormat(cartItem.price)}
                    </span>
                  </div>
                </div>

                <p className='ml-auto text-sm font-semibold uppercase text-muted-foreground'>
                  {cartItem.size}
                </p>
              </div>
            ))}
          </div>

          <div className='space-y-4'>
            <div className='flex items-center justify-between text-sm'>
              <span>Total</span>
              <span>$97.00</span>
            </div>

            <Button className='w-full'>View cart</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
