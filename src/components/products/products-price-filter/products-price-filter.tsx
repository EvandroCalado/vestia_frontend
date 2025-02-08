'use client';

import { useState } from 'react';

import { Slider } from '@/components/ui';
import { currencyFormat } from '@/utils';

type ProductsFilterPrice = {
  paramPrice: string | string[] | undefined;
};

export const ProductsPriceFilter = ({ paramPrice }: ProductsFilterPrice) => {
  const [price, setPrice] = useState<number | null>(Number(paramPrice) || 0);

  return (
    <div>
      <h5 className='mb-6 font-medium capitalize'>price</h5>

      <div className='space-y-2'>
        <Slider
          defaultValue={[
            price ??
              (Array.isArray(paramPrice)
                ? Number(paramPrice[0])
                : Number(paramPrice)) ??
              0,
          ]}
          max={500}
          step={1}
          name='price'
          onChange={(e) =>
            setPrice(Number((e.target as HTMLInputElement).value))
          }
        />
        <div className='flex items-center justify-between'>
          <span>{currencyFormat(0)}</span>
          <span>{currencyFormat(price ?? 0)}</span>
        </div>
      </div>
    </div>
  );
};
