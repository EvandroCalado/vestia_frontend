import { ProductCardProps } from '@/components/product';
import { StrapiProductsType } from '@/types';

export const bestSellingProductMapper = (
  bestSellingProducts: StrapiProductsType,
): ProductCardProps[] => {
  return bestSellingProducts.data.map((product) => {
    return {
      id: product.id,
      image: product.variant[0].images[0].formats.small.url,
      title: product.title,
      slug: product.slug,
      inStock: !!product.variant[0].quantity,
      price: product.price,
    };
  });
};
