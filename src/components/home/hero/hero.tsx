import { Button } from '@/components/ui';
import { BurstPuckerIcon } from '@/icons';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export type HeroProps = {
  title: string;
  description: string;
  button: {
    title: string;
    href: string;
  };
  image: string;
};

export const Hero = ({ title, description, button, image }: HeroProps) => {
  return (
    <section className='container grid h-full gap-8 p-5 mx-auto md:grid-cols-2'>
      <div className='flex flex-col justify-center gap-8 max-md:mx-auto'>
        <h1 className='capitalize'>{title}</h1>
        <p className='text-muted-foreground'>{description}</p>

        <Button asChild className='w-max capitalize'>
          <Link href={button.href}>
            {button.title} <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className='relative aspect-square max-md:mx-auto md:h-[360px] lg:h-[600px] md:ml-auto'>
        <Image
          src={image}
          alt={title}
          width={500}
          height={800}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-contain h-full ml-auto w-max'
        />

        <div className='absolute rounded-full top-0 left-0 w-full h-full bg-[#E6E7E8] -z-10' />
        <BurstPuckerIcon className='absolute top-2 left-2' />
      </div>
    </section>
  );
};
