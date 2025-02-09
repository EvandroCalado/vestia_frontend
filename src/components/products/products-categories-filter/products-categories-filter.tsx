'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const categories = [
  'shirts',
  'pants',
  'jackets',
  'shorts',
  'activewear',
  'accessories',
];

export const ProductsCategoriesFilter = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    setAllCategories(searchParams.getAll('categories'));
  }, [searchParams]);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAllCategories((prev) =>
      prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value],
    );
  };

  return (
    <div className='w-full space-y-4 border-zinc-200 pb-5 md:mb-5 md:border-b'>
      <h5 className='mb-2 font-medium capitalize md:mb-6'>categories</h5>

      {categories.map((category) => (
        <div key={category} className='flex items-center gap-2'>
          <input
            id={category}
            type='checkbox'
            name='categories'
            value={category}
            checked={allCategories?.includes(category)}
            onChange={handleClick}
            className='peer h-4 w-4 shrink-0 rounded-sm border border-primary accent-black shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground'
          />
          <label
            htmlFor={category}
            className='cursor-pointer text-sm capitalize leading-none text-zinc-500'
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};
