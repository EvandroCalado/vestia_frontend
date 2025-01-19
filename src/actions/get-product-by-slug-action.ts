import { STRAPI_URL } from '@/lib/utils';
import { StrapiProductBySlugType } from '@/types';

export const getProductBySlugAction = async (slug: string) => {
  const url = new URL(
    `/api/products?populate[variant][populate][0]=images&filters[slug][$eq]=${slug}`,
    STRAPI_URL,
  );

  try {
    const response = await fetch(url);
    const product: StrapiProductBySlugType = await response.json();

    if (!response.ok) {
      throw new Error('Product not fond.');
    }

    return {
      title: product.data[0].title,
      description: product.data[0].description,
      inStock: !!product.data[0].variant[0].quantity,
      price: product.data[0].price,
      variants: product.data[0].variant.map((item) => {
        return {
          id: item.id,
          title: item.title,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
          images: item.images.map((image) => image.formats.medium.url),
        };
      }),
    };
  } catch (error) {
    throw new Error('Internal server error.');
  }
};
