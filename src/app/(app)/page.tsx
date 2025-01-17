import { getBannersAction } from '@/actions';
import {
  BestSelling,
  FeaturedAndLatest,
  Hero,
  Services,
} from '@/components/home';

export const HomePage = async () => {
  const [banner1, banner2] = await getBannersAction();

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
