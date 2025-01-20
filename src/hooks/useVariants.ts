import { Variant } from '@/components/product';
import { useVariantStore } from '@/stores';

export const useVariants = (variants: Variant[]) => {
  const { color } = useVariantStore();

  const uniqueVariants = Array.from(
    new Map(variants.map((variant) => [variant.title, variant])).values(),
  );

  const selectedColor = color || variants[0].title;

  const currentVariant =
    uniqueVariants.find((variant) => variant.title === selectedColor) ||
    uniqueVariants[0];

  const currentSizes = variants
    .filter((variant) => variant.title === selectedColor)
    .map((variant) => variant.size);

  const currentQuantity =
    variants.find(
      (variant) =>
        variant.title === selectedColor && variant.size === currentVariant.size,
    )?.quantity || 1;

  return { uniqueVariants, currentVariant, currentSizes, currentQuantity };
};
