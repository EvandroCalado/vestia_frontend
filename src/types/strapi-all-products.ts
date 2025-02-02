export type StrapiAllProducts = {
  data: (Datum | Data2)[];
  meta: Meta;
};

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

type Data2 = {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  description: string;
  price: number;
  isBestSelling: boolean;
  categories: string;
  variant: Variant2[];
};

type Variant2 = {
  id: number;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  images: Image[];
};

type Datum = {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  description: string;
  price: number;
  isBestSelling: boolean;
  categories: string;
  variant: Variant[];
};

type Variant = {
  id: number;
  title: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  images: Images2[];
};

type Images2 = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Formats2 = {
  large: Large;
  small: Image;
  medium: Image;
  thumbnail: Image;
};

type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Formats = {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
};

type Large = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
};

type Providermetadata = {
  public_id: string;
  resource_type: string;
};
