export type StrapiBannersType = {
  data: Datum[];
  meta: Meta;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Datum = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  button: Button;
  image: Image;
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

type Button = {
  id: number;
  title: string;
  href: string;
  variant: string;
};
