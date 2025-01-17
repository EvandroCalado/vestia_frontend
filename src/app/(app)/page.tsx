import { getBannersAction } from '@/actions';
import {
  BestSelling,
  FeaturedAndLatest,
  Hero,
  Services,
} from '@/components/home';

export const HomePage = async () => {
  const banners = await getBannersAction();

  const [banner1, banner2] = banners ?? [];

  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero {...banner1} />
      <Services />
      <BestSelling />
      <Hero {...banner2} />
      <FeaturedAndLatest />
    </div>
  );
};

export default HomePage;
