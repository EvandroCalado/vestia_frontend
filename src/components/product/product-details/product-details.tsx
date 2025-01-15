import { Button } from '@/components/ui';
import { HeartIcon } from '@/icons';
import { MinusIcon, PlusIcon } from 'lucide-react';

import { ProductColors } from '../product-colors';
import { ProductPrice } from '../product-price';
import { ProductRating } from '../product-rating';

type Colors = {
  name: string;
  color: string;
};

type ProductDetailsProps = {
  title: string;
  score: number;
  numReviews: number;
  inStock: boolean;
  price: number;
  colors: Colors[];
  sizes: string[];
  quantity: number;
};

export const ProductDetails = ({
  title,
  score,
  numReviews,
  inStock,
  price,
  colors,
  sizes,
  quantity,
}: ProductDetailsProps) => {
  return (
    <div className='space-y-8'>
      <h2 className='capitalize'>{title}</h2>

      {/* rating */}
      <ProductRating score={score} numReviews={numReviews} inStock={inStock} />

      {/* price */}
      <ProductPrice price={price} />

      {/* colors */}
      <ProductColors colors={colors} />

      {/* sizes */}
      <div className='space-y-4'>
        <h5 className='font-normal uppercase text-muted-foreground'>
          select size
        </h5>
        <div className='flex items-center gap-4'>
          {sizes.map((size) => (
            <button
              key={size}
              className='w-9 h-9 uppercase border-[1px] rounded-md border-gray-200 duration-150 hover:border-primary'
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* quantity */}
      <div className='space-y-4 text-start'>
        <h5 className='font-normal uppercase text-muted-foreground'>
          quantity
        </h5>
        <div className='flex items-center border-[1px] rounded-md border-gray-200 w-max'>
          <Button variant='ghost' className='w-9 h-9'>
            <MinusIcon />
          </Button>
          <span className='flex items-center justify-center w-9 h-9'>1</span>
          <Button variant='ghost' className='w-9 h-9'>
            <PlusIcon />
          </Button>
        </div>
      </div>

      {/* add to cart */}
      <div className='flex flex-col items-start space-y-4'>
        <div className='flex items-center w-full gap-4'>
          <Button className='w-full md:w-72'>Add to cart</Button>
          <Button variant='outline' size='icon'>
            <HeartIcon />
          </Button>
        </div>
        <h6 className='flex items-center justify-center gap-2 uppercase text-muted-foreground'>
          <span className='bg-muted-foreground w-4 h-0.5 inline-block' />
          free shipping on orders $100+
        </h6>
      </div>
    </div>
  );
};
