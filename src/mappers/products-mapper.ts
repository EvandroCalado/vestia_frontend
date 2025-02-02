type StrapiImage = {
  formats: {
    small: {
      url: string;
    };
  };
};

type StrapiVariant = {
  id: number;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  images: StrapiImage[];
};

type StrapiProduct = {
  id: number;
  title: string;
  slug: string;
  description: string;
  isBestSelling: boolean;
  categories: string;
  variant: StrapiVariant[];
};

type StrapiPagination = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

type StrapiProducts = {
  data: StrapiProduct[];
  meta: StrapiPagination;
};

export type Variant = {
  id: number;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  images: string[];
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  isBestSelling: boolean;
  categories: string;
  variants: Variant[];
};

type Return = {
  products: Product[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export const productsMapper = (strapiProducts: StrapiProducts): Return => {
  const products = strapiProducts.data.map((product) => {
    return {
      id: product.id,
      title: product.title,
      slug: product.slug,
      description: product.description,
      isBestSelling: product.isBestSelling,
      categories: product.categories,
      variants: product.variant.map((item) => {
        return {
          id: item.id,
          title: item.title,
          color: item.color,
          size: item.size,
          quantity: item.quantity,
          price: item.price,
          images: item.images.map((image) => image.formats.small.url),
        };
      }),
    };
  });

  const pagination = {
    page: strapiProducts.meta.pagination.page,
    pageSize: strapiProducts.meta.pagination.pageSize,
    pageCount: strapiProducts.meta.pagination.pageCount,
    total: strapiProducts.meta.pagination.total,
  };

  return {
    products,
    pagination,
  };
};
