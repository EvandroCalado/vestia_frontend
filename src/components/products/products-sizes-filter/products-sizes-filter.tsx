'use client';

import { X } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';

import { Badge } from '@/components/ui';

const sizes = ['s', 'm', 'x', 'xl', 'xxl'];

type ProductsSizesFilterProps = {
  refetchProducts: () => Promise<void>;
};

export const ProductsSizesFilter = ({
  refetchProducts,
}: ProductsSizesFilterProps) => {
  const [size, setSize] = useQueryState('size', parseAsString.withDefault(''));

  const handleSize = (value: string | null) => {
    setSize(value);

    setTimeout(() => {
      refetchProducts();
    });
  };

  return (
    <div className='relative border-zinc-200 pb-5 md:mb-5 md:border-b'>
      {size && (
        <Badge
          onClick={() => handleSize(null)}
          variant='outline'
          className='absolute right-0 cursor-pointer'
        >
          Clear <X size={12} />
        </Badge>
      )}

      <h5 className='mb-2 font-medium capitalize md:mb-6'>sizes</h5>

      <div className='flex flex-wrap items-center gap-4'>
        {sizes.map((item) => (
          <div key={item} className='relative h-10 w-10'>
            <input
              type='radio'
              name='size'
              radioGroup='size'
              value={item}
              onChange={(e) => handleSize(e.target.value)}
              checked={item === size}
              className={`h-10 w-10 cursor-pointer appearance-none rounded border checked:border-black checked:ring-offset-2 focus:outline-none`}
            />
            <span className='pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
