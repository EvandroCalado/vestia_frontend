import { ComponentProps, forwardRef } from 'react';

import { cn } from '@/lib/utils';

type LoadingProps = ComponentProps<'div'>;

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'h-6 w-6 animate-spin rounded-full border-4 border-gray-300 border-t-black/90',
          props.className,
        )}
      />
    );
  },
);

Loading.displayName = 'Loading';
