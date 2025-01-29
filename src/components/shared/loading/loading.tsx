import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/utils';

type LoadingProps = ComponentProps<'div'> & {
  hasText?: boolean;
};

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ hasText, ...props }, ref) => {
    return (
      <div className='flex flex-col items-center justify-center gap-6'>
        <div
          ref={ref}
          {...props}
          className={cn(
            'h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-black/90',
            props.className,
          )}
        />

        {hasText && <h5 className='mt-6 animate-pulse'>Loading...</h5>}
      </div>
    );
  },
);

Loading.displayName = 'Loading';
