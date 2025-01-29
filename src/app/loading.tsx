import { Loading } from '@/components/shared';

const LoadingPage = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Loading hasText className='h-20 w-20' />
    </div>
  );
};

export default LoadingPage;
