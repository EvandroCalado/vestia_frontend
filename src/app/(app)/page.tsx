import { getBannersAction } from '@/actions';
import {
  BestSelling,
  FeaturedAndLatest,
  Hero,
  Services,
} from '@/components/home';
import { notFound } from 'next/navigation';

export const HomePage = async () => {
  const banners = await getBannersAction();

  if (!banners) notFound();

  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero {...banners[0]} />
      <Services />
      <BestSelling />
      <Hero {...banners[1]} />
      <FeaturedAndLatest />
    </div>
  );
};

export default HomePage;
