import { getBannersAction } from '@/actions';
import {
  BestSelling,
  FeaturedAndLatest,
  Hero,
  Services,
} from '@/components/home';

export const HomePage = async () => {
  const [banners1, banners2] = await getBannersAction();

  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero {...banners1} />
      <Services />
      <BestSelling />
      <Hero {...banners2} />
      <FeaturedAndLatest />
    </div>
  );
};

export default HomePage;
