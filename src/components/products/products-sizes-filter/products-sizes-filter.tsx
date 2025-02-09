'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const sizes = ['s', 'm', 'x', 'xl', 'xxl'];

export const ProductsSizesFilter = () => {
  const [size, setSize] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    setSize(searchParams.get('size'));
  }, [searchParams]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSize(value);
  };

  return (
    <div className='border-zinc-200 pb-5 md:mb-5 md:border-b'>
      <h5 className='mb-2 font-medium capitalize md:mb-6'>sizes</h5>

      <div className='flex flex-wrap items-center gap-4'>
        {sizes.map((item) => (
          <div key={item} className='relative h-10 w-10'>
            <input
              type='radio'
              name='size'
              radioGroup='size'
              value={item}
              onChange={handleClick}
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
