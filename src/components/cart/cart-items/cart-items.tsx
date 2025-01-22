import Image from 'next/image';

import { MinusIcon, PlusIcon } from 'lucide-react';

import { CloseIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { currencyFormat } from '@/utils';

export type Cart = {
  id: number;
  title: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
};

type CartItemsProps = {
  items: Cart[];
  onMenu?: boolean;
};

export const CartItems = ({ items, onMenu = false }: CartItemsProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn('relative mb-4 grid grid-cols-6 gap-2 md:gap-4')}
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
                <MinusIcon className='h-8 w-8 p-2' />
                <span>{item.quantity}</span>
                <PlusIcon className='h-8 w-8 p-2' />
              </div>
            </div>
          </div>

          {/* close button */}
          <CloseIcon
            className={cn(
              'left-0 top-0 cursor-pointer rounded-sm bg-gray-200 duration-150 hover:bg-gray-300 max-lg:absolute',
              {
                absolute: onMenu,
              },
            )}
          />
        </div>
      ))}
    </>
  );
};
