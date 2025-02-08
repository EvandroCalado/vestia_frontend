'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { currencyFormat } from '@/utils';

export const ProductsPriceFilter = () => {
  const [price, setPrice] = useState<number>(0);

  const searchParams = useSearchParams();

  useEffect(() => {
    setPrice(Number(searchParams.get('price')));
  }, [searchParams]);

  return (
    <div>
      <h5 className='mb-6 font-medium capitalize'>price</h5>

      <div className='space-y-2'>
        <input
          type='range'
          max={500}
          step={1}
          name='price'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className='w-full accent-primary'
        />
        <div className='flex items-center justify-between'>
          <span>{currencyFormat(0)}</span>
          <span>{currencyFormat(price ?? 0)}</span>
        </div>
      </div>
    </div>
  );
};
