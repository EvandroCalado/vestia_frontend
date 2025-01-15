'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui';
import Image from 'next/image';

type ProductSlideProps = {
  images: string[];
};

export const ProductSlide = ({ images }: ProductSlideProps) => {
  return (
    <Carousel className='w-full max-w-2xl h-max'>
      <CarouselContent>
        {images.map((image) => (
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
