import { Hero, Services } from '@/components/home';

export const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full space-y-8'>
      <Hero />
      <Services />
    </div>
  );
};

export default HomePage;
