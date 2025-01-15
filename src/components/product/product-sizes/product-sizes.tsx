import { cn } from '@/lib/utils';

const allSizes = ['s', 'm', 'x', 'xl', 'xxl'];

type ProductSizesProps = {
  sizes: string[];
};

export const ProductSizes = ({ sizes }: ProductSizesProps) => {
  return (
    <div className='space-y-4'>
      <h5 className='font-normal uppercase text-muted-foreground'>
        select size
      </h5>
      <div className='flex items-center gap-4'>
        {allSizes.map((size) => (
          <button
            key={size}
            disabled={!sizes.includes(size)}
            className={cn(
              'w-9 h-9 uppercase border-[1px] rounded-md border-gray-200 duration-150 hover:border-primary',
              {
                'disabled:opacity-30 hover:border-gray-200':
                  !sizes.includes(size),
              },
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
