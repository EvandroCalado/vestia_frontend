'use client';

import { X } from 'lucide-react';
import { parseAsString, useQueryState } from 'nuqs';

import { Badge, Checkbox } from '@/components/ui';

const categoriesList = [
  'shirts',
  'pants',
  'jackets',
  'shorts',
  'activewear',
  'accessories',
];

type ProductsCategoriesFilterProps = {
  refetchProducts: () => Promise<void>;
};

export const ProductsCategoriesFilter = ({
  refetchProducts,
}: ProductsCategoriesFilterProps) => {
  const [categories, setCategories] = useQueryState(
    'categories',
    parseAsString.withDefault(''),
  );

  const handleCategory = (value: string | null) => {
    setCategories(value);

    setTimeout(() => {
      refetchProducts();
    }, 300);
  };

  return (
    <div className='relative w-full border-zinc-200 pb-5 md:mb-5 md:border-b'>
      {categories && (
        <Badge
          onClick={() => handleCategory(null)}
          variant='outline'
          className='absolute right-0 cursor-pointer'
        >
          Clear <X size={12} />
        </Badge>
      )}

      <h5 className='mb-2 font-medium capitalize md:mb-6'>categories</h5>

      {categoriesList.map((category) => (
        <div key={category} className='mb-2 flex items-center gap-2'>
          <Checkbox
            id={category}
            name='categories'
            value={category}
            checked={categories === category}
            onCheckedChange={(checked) =>
              handleCategory(checked ? category : '')
            }
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
