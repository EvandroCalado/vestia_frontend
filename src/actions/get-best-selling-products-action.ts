import { ProductCardProps } from '@/components/product';
import { STRAPI_URL } from '@/lib/utils';
import { StrapiProductsType } from '@/types';

export const getBestSellingProductsAction = async () => {
  const url = new URL(
    '/api/products?populate[variant][populate][0]=images&filters[isBestSelling][$eq]=true',
    STRAPI_URL,
  );

  try {
    const response = await fetch(url);
    const bestSellingProducts: StrapiProductsType = await response.json();

    return bestSellingProducts.data.map((product): ProductCardProps => {
      return {
        id: product.id,
        image: product.variant[0].images[0].formats.small.url,
        title: product.title,
        slug: product.slug,
        inStock: !!product.variant[0].quantity,
        price: product.price,
      };
    });
  } catch (error) {
    console.error('Get best selling action:', error);
  }
};
