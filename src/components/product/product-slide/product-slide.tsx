'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import { useVariants } from '@/hooks';
import Image from 'next/image';

import { Variant } from '../product-details';

type ProductSlideProps = {
  variants: Variant[];
};

export const ProductSlide = ({ variants }: ProductSlideProps) => {
  const { currentVariant } = useVariants(variants);

  return (
    <Carousel className='w-full max-w-2xl h-max'>
      <CarouselContent>
        {currentVariant.images.map((image) => (
          <CarouselItem
            key={image}
            className='flex items-center justify-center'
          >
            <Image
              src={image}
              alt='Product image'
              width={300}
              height={500}
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-contain w-auto'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0' />
      <CarouselNext className='right-0' />
    </Carousel>
  );
};
