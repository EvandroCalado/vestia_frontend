import { Button } from '@/components/ui';
import { HeartIcon, StarIcon } from '@/icons';
import { currencyFormat } from '@/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';

type Rating = {
  score: number;
  numReviews: number;
};

type ProductDetailsProps = {
  title: string;
  rating: Rating;
  inStock: boolean;
  price: number;
  colors: string[];
  sizes: string[];
  quantity: number;
};

export const ProductDetails = ({
  title,
  rating,
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
      <div className='flex items-center gap-4'>
        <StarIcon />

        <div className='flex items-center gap-1 text-muted-foreground'>
          <span>{rating.score}</span>
          <span className='bg-muted-foreground w-4 h-0.5 inline-block' />
          <span>{rating.numReviews} Reviews</span>
        </div>

        <div>{inStock ? 'in stock' : 'ou of stock'}</div>
      </div>

      {/* price */}
      <h3>{currencyFormat(price)}</h3>

      {/* colors */}
      <div className='space-y-4'>
        <h5 className='font-normal uppercase text-muted-foreground'>
          available colors
        </h5>
        <div className='flex items-center gap-4'>
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className='w-6 h-6 duration-150 rounded-full ring-1 ring-transparent hover:ring-primary ring-offset-4'
            />
          ))}
        </div>
      </div>

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
