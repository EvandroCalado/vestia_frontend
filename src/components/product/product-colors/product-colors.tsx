'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { useVariants } from '@/hooks';
import { cn } from '@/lib/utils';
import { useVariantStore } from '@/stores';

import { Variant } from '../product-details';

type ProductColorsProps = {
  variants: Variant[];
};

export const ProductColors = ({ variants }: ProductColorsProps) => {
  const { color, setColor } = useVariantStore();

  const { uniqueVariants } = useVariants(variants);

  return (
    <div className='space-y-4'>
      <h5 className='font-normal uppercase text-muted-foreground'>
        available colors
      </h5>
      <div className='flex items-center gap-4'>
        {uniqueVariants.map((variant) => (
          <TooltipProvider key={variant.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{ backgroundColor: variant.color }}
                  className={cn(
                    'w-6 h-6 duration-150 rounded-full ring-1 ring-transparent hover:ring-primary ring-offset-4',
                    {
                      'ring-primary': color === variant.title,
                    },
                  )}
                  onClick={() => setColor(variant.title)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{variant.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
