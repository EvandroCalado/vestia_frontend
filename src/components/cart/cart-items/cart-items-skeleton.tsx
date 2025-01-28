export const CartItemsSkeleton = () => {
  return (
    <div className='mb-8 grid grid-cols-4 gap-2 md:gap-4 lg:grid-cols-6'>
      <div className='h-20 w-16 animate-pulse rounded-lg bg-gray-300' />

      <div className='w-full space-y-2 lg:col-span-2'>
        <div className='h-5 w-14 animate-pulse rounded-lg bg-gray-300 lg:w-28' />
        <div className='h-5 w-14 animate-pulse rounded-lg bg-gray-300 lg:w-28' />
      </div>

      <div className='h-8 w-12 animate-pulse rounded-lg bg-gray-300 md:w-20 lg:col-span-2 lg:w-32 xl:w-60' />

      <div>
        <div className='h-6 w-6 animate-pulse rounded bg-gray-300' />
      </div>
    </div>
  );
};
