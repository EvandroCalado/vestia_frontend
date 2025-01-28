import { Separator } from '@/components/ui';

export const CartSummarySkeleton = () => {
  return (
    <div className='flex h-[431px] w-full flex-col justify-between rounded-xl border px-7 py-10 md:w-96'>
      <div className='h-8 w-full animate-pulse rounded-lg bg-gray-300' />

      <div className='flex items-center justify-between'>
        <div className='h-6 w-28 animate-pulse rounded-lg bg-gray-300'></div>
        <div className='h-6 w-14 animate-pulse rounded-lg bg-gray-300'></div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='h-6 w-28 animate-pulse rounded-lg bg-gray-300'></div>
        <div className='h-6 w-14 animate-pulse rounded-lg bg-gray-300'></div>
      </div>

      <Separator />

      <div className='flex items-center justify-between'>
        <div className='h-6 w-28 animate-pulse rounded-lg bg-gray-300'></div>
        <div className='h-6 w-14 animate-pulse rounded-lg bg-gray-300'></div>
      </div>

      <div className='h-10 w-full animate-pulse rounded-lg bg-gray-300'></div>

      <div className='mx-auto h-4 w-36 animate-pulse rounded-lg bg-gray-300'></div>
    </div>
  );
};
