'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { useVariantStore } from '@/stores';

import { Variant } from '../product-details';

type ProductColorsProps = {
  variants: Variant[];
};

export const ProductColors = ({ variants }: ProductColorsProps) => {
  const { color, setColor } = useVariantStore();

  const uniqueColors = Array.from(
    new Map(variants.map((variant) => [variant.title, variant])).values(),
  );

  return (
    <div className='space-y-4'>
      <h5 className='font-normal uppercase text-muted-foreground'>
        available colors
      </h5>
      <div className='flex items-center gap-4'>
        {uniqueColors.map((uniqueColor) => (
          <TooltipProvider key={uniqueColor.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  style={{ backgroundColor: uniqueColor.color }}
                  className={cn(
                    'w-6 h-6 duration-150 rounded-full ring-1 ring-transparent hover:ring-primary ring-offset-4',
                    {
                      'ring-primary': color === uniqueColor.title,
                    },
                  )}
                  onClick={() => setColor(uniqueColor.title)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{uniqueColor.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};
