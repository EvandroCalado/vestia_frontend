'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { X } from 'lucide-react';

import { Button } from '@/components/ui';

export const ProductsCleanFilter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  if (!searchParams.toString()) return null;

  const paramCategories = searchParams.getAll('categories');
  const paramColor = searchParams.getAll('color');
  const paramSize = searchParams.getAll('size');
  const paramPrice = searchParams.getAll('price');

  const handleRemoveParam = (
    paramToRemove: string | undefined,
    param: string,
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.delete(param);

    const updatedCategories = searchParams
      .getAll(param)
      .filter((param) => param !== paramToRemove);

    updatedCategories.forEach((param) => {
      if (param) {
        newSearchParams.append(param, param);
      }
    });

    router.push(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <div className='mb-6 space-y-6'>
      <h6 className='font-semibold'>Applied Filters:</h6>

      <div className='flex flex-wrap items-center gap-4'>
        {paramCategories.map((category) => (
          <Button
            key={category}
            variant='outline'
            className='rounded-full capitalize'
            onClick={() => handleRemoveParam(category, 'categories')}
          >
            {category}
            <X />
          </Button>
        ))}

        {paramColor.map((color) => (
          <Button
            key={color}
            variant='outline'
            className='rounded-full capitalize'
            onClick={() => handleRemoveParam(color, 'color')}
          >
            Color: {color}
            <X />
          </Button>
        ))}

        {paramSize.map((size) => (
          <Button
            key={size}
            variant='outline'
            className='rounded-full capitalize'
            onClick={() => handleRemoveParam(size, 'size')}
          >
            Size: {size}
            <X />
          </Button>
        ))}

        {paramPrice.map((price) => (
          <Button
            key={price}
            variant='outline'
            className='rounded-full capitalize'
            onClick={() => handleRemoveParam(price, 'price')}
          >
            Price: {price}
            <X />
          </Button>
        ))}
      </div>
    </div>
  );
};
