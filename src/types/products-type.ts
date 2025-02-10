export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
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
