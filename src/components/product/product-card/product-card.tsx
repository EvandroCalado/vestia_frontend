import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import Image from 'next/image';
import Link from 'next/link';

export type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  slug: string;
  inStock: boolean;
  price: number;
};

export const ProductCard = ({
  image,
  title,
  slug,
  inStock,
  price,
}: ProductCardProps) => {
  return (
    <Card>
      <Link href={`/product/${slug}`} className='group'>
        <CardHeader className='overflow-hidden'>
          <Image
            src={image}
            alt={title}
            width={200}
            height={300}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='duration-150 group-hover:scale-105 w-auto'
          />
        </CardHeader>
        <CardContent>
          <h5 className='font-normal capitalize'>{title}</h5>
        </CardContent>
        <CardFooter className='flex items-center justify-between'>
          <Badge
            className='uppercase rounded-full'
            variant={inStock ? 'outline' : 'destructive'}
          >
            {inStock ? 'in stock' : 'out of stock'}
          </Badge>
          <p className='text-muted-foreground'>${price.toFixed(2)}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};
