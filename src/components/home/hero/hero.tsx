import { Button } from '@/components/ui';
import { BurstPuckerIcon } from '@/icons';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className='container grid h-full gap-8 p-5 mx-auto md:grid-cols-2'>
      <div className='flex flex-col justify-center gap-8 max-md:mx-auto'>
        <h1>Fresh Arrivals Online</h1>
        <p className='text-muted-foreground'>
          Discover Our Newest Collection Today.
        </p>

        <Button asChild className='w-max'>
          <Link href='/products'>
            View Collection <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className='relative aspect-square max-md:mx-auto md:h-[380px] lg:h-[600px] md:ml-auto'>
        <Image
          src='/images/hero.png'
          alt='Hero'
          width={500}
          height={800}
          priority
          className='object-contain h-full ml-auto w-max'
        />

        <div className='absolute rounded-full top-0 left-0 w-full h-full bg-[#E6E7E8] -z-10' />
        <BurstPuckerIcon className='absolute top-2 left-2' />
      </div>
    </section>
  );
};
