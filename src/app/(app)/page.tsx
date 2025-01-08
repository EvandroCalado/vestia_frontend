import { Button } from '@/components/ui';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <div className='flex flex-col text-white items-center justify-center w-full gap-8 h-4/5'>
      <h1 className=' text-6xl font-semibold'>Strapi Auth</h1>

      <p className='text-xl'>Strapi auth with Next 15</p>

      <div className='space-x-5'>
        <Button asChild className='w-36'>
          <Link
            href='https://github.com/EvandroCalado/auth_strapi_template'
            target='_blank'
          >
            Project Repo
          </Link>
        </Button>
        <Button asChild className='w-36'>
          <Link href='https://github.com/EvandroCalado' target='_blank'>
            Github
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
