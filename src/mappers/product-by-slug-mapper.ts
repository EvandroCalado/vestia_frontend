import { StrapiProductBySlugType } from '@/types';

export const productBySlugMapper = (product: StrapiProductBySlugType) => {
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
};
