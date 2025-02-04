import { notFound } from 'next/navigation';

import { getBannersAction } from '@/actions';
import { Hero, Services } from '@/components/home';

export const HomePage = async () => {
  const banners = await getBannersAction();

  if (!banners) notFound();

  return (
    <div className='flex h-full flex-col items-center justify-center space-y-8'>
      <Hero {...banners[0]} />
      <Services />
      {/* <BestSelling /> */}
      <Hero {...banners[1]} />
      {/* <FeaturedAndLatest /> */}
    </div>
  );
};

export default HomePage;
