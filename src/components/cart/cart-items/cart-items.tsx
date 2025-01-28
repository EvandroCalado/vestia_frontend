'use client';

import Image from 'next/image';

import { MinusIcon, PlusIcon } from 'lucide-react';

import { useLoaded } from '@/hooks';
import { CloseIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { CartItem, useCartStore } from '@/stores';
import { currencyFormat } from '@/utils';
import { CartItemsSkeleton } from './cart-items-skeleton';

type CartItemsProps = {
  onMenu?: boolean;
};

export const CartItems = ({ onMenu = false }: CartItemsProps) => {
  const loaded = useLoaded();
  const { cart, updateProductQuantity, removeProductFromCart } = useCartStore();

  const onValueChange = (
    product: CartItem,
    value: number,
    quantity: number,
  ) => {
    if (quantity + value < 1 || quantity + value > 10) return;

    updateProductQuantity(product, quantity + value);
  };

  if (!loaded) {
    return (
      <div>
        <CartItemsSkeleton />
        <CartItemsSkeleton />
      </div>
    );
  }

  if (cart?.length === 0) {
    return (
      <div className='absolute inset-0 flex h-full w-full flex-col items-center justify-center'>
        <h6 className='text-center font-medium'>Your cart is empty</h6>
      </div>
    );
  }

  return (
    <>
      {cart?.map((item) => (
        <div
          key={item.id}
          className={cn('relative mb-8 grid grid-cols-6 gap-2 md:gap-4')}
        >
          {/* image */}
          <Image
            src={item.image}
            alt={item.title}
            width={70}
            height={70}
            priority
            className='min-w-12'
          />

          <div
            className={cn(
              'col-span-4 flex w-full gap-2 max-md:col-span-5 max-md:flex-col',
              {
                'col-span-5 flex-col': onMenu,
              },
            )}
          >
            {/* title and size */}
            <div
              className={cn(
                'col-span-2 flex w-full flex-col gap-2 max-md:flex-row max-md:justify-between',
                {
                  'flex-row justify-between': onMenu,
                },
              )}
            >
              <h6 className='font-medium capitalize'>{item.title}</h6>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <div className='capitalize'>
                  <span
                    className={cn('max-md:hidden', {
                      hidden: onMenu,
                    })}
                  >
                    Color:
                  </span>{' '}
                  <span>{item.color}</span>
                </div>
                <div>
                  <span
                    className={cn('max-md:hidden', {
                      hidden: onMenu,
                    })}
                  >
                    Size:
                  </span>{' '}
                  <span className='uppercase'>{item.size}</span>
                </div>
              </div>
            </div>

            {/* price and quantity */}
            <div className='col-span-6 flex w-full gap-4 md:col-span-2'>
              <span className='font-medium'>{currencyFormat(item.price)}</span>

              <div className='flex h-max w-max items-center gap-4 rounded-sm border'>
                <button onClick={() => onValueChange(item, -1, item.quantity)}>
                  <MinusIcon className='h-8 w-8 p-2' />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onValueChange(item, 1, item.quantity)}>
                  <PlusIcon className='h-8 w-8 p-2' />
                </button>
              </div>
            </div>
          </div>

          {/* close button */}
          <button onClick={() => removeProductFromCart(item)}>
            <CloseIcon
              className={cn(
                'left-0 top-0 cursor-pointer rounded-sm bg-gray-200 duration-150 hover:bg-gray-300 max-lg:absolute',
                {
                  absolute: onMenu,
                },
              )}
            />
          </button>
        </div>
      ))}
    </>
  );
};
