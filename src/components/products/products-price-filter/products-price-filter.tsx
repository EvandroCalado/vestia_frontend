'use client';

import { parseAsInteger, useQueryState } from 'nuqs';

import { currencyFormat } from '@/utils';

type ProductsPriceFilterProps = {
  refetchProducts: () => Promise<void>;
};

export const ProductsPriceFilter = ({
  refetchProducts,
}: ProductsPriceFilterProps) => {
  const [price, setPrice] = useQueryState(
    'price',
    parseAsInteger.withDefault(0),
  );

  const handlePrice = (value: number) => {
    setPrice(value);

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <div>
      <h5 className='mb-2 font-medium capitalize md:mb-6'>price</h5>

      <div className='space-y-2'>
        <input
          type='range'
          max={500}
          step={1}
          name='price'
          value={price}
          onChange={(e) => handlePrice(Number(e.target.value))}
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
