import Image from 'next/image';
import Link from 'next/link';

import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { Product } from '@/types';
import { ProductCardPrice } from '../product-card-price';

export type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className='max-w-[320px] overflow-hidden'>
      <Link href={`/products/${product.slug}`} className='group'>
        <CardHeader className='overflow-hidden p-0'>
          <Image
            src={product.variants[0].images[0]}
            alt={product.title}
            width={200}
            height={300}
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-auto rounded-tl-xl rounded-tr-xl object-contain duration-300 group-hover:scale-105'
          />
        </CardHeader>
        <CardContent>
          <h6 className='truncate font-medium capitalize'>{product.title}</h6>
        </CardContent>
        <CardFooter className='flex items-center justify-between text-sm'>
          <Badge
            className='rounded-full text-[10px] uppercase lg:text-xs'
            variant={true ? 'outline' : 'destructive'}
          >
            {true ? 'in stock' : 'out of stock'}
          </Badge>

          <ProductCardPrice variants={product.variants} />
        </CardFooter>
      </Link>
    </Card>
  );
};
