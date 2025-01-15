import { Badge } from '@/components/ui';
import { StarIcon } from '@/icons';

type ProductRatingProps = {
  score: number;
  numReviews: number;
  inStock: boolean;
};

export const ProductRating = ({
  score,
  numReviews,
  inStock,
}: ProductRatingProps) => {
  return (
    <div className='flex items-center gap-4'>
      <StarIcon />

      <div className='flex items-center gap-1 text-muted-foreground'>
        <span>{score}</span>
        <span className='bg-muted-foreground w-4 h-0.5 inline-block' />
        <span>{numReviews} Reviews</span>
      </div>

      <Badge
        className='uppercase rounded-full font-normal'
        variant={inStock ? 'outline' : 'destructive'}
      >
        {inStock ? 'in stock' : 'out of stock'}
      </Badge>
    </div>
  );
};
