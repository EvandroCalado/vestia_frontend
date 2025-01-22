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

type CartItemProps = {
  items: Cart[];
  onMenu?: boolean;
};

export const CartItem = ({ items, onMenu = false }: CartItemProps) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn('relative grid grid-cols-6 gap-8', {
            'flex gap-4': onMenu,
          })}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={70}
            height={70}
            priority
          />

          <div
            className={cn('col-span-4 flex w-full', {
              'flex-col space-y-4': onMenu,
            })}
          >
            <div
              className={cn('col-span-2 w-full space-y-4', {
                'flex items-center justify-between gap-4 space-y-0': onMenu,
              })}
            >
              <h6 className='font-medium capitalize'>{item.title}</h6>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <div className='capitalize'>
                  <span
                    className={cn('', {
                      hidden: onMenu,
                    })}
                  >
                    Color:
                  </span>{' '}
                  <span>{item.color}</span>
                </div>
                <div>
                  <span
                    className={cn('', {
                      hidden: onMenu,
                    })}
                  >
                    Size:
                  </span>{' '}
                  <span className='uppercase'>{item.size}</span>
                </div>
              </div>
            </div>

            <div className='col-span-2 flex w-full gap-4'>
              <span className='font-medium'>{currencyFormat(item.price)}</span>

              <div className='flex h-max w-max items-center gap-4 rounded-sm border'>
                <MinusIcon className='h-8 w-8 p-2' />
                <span>{item.quantity}</span>
                <PlusIcon className='h-8 w-8 p-2' />
              </div>
            </div>
          </div>

          <CloseIcon
            className={cn(
              'cursor-pointer rounded-sm bg-gray-200 duration-150 hover:bg-gray-300',
              {
                'absolute left-0 top-0': onMenu,
              },
            )}
          />
        </div>
      ))}
    </>
  );
};
