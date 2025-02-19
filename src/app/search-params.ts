import { createLoader, parseAsInteger, parseAsString } from 'nuqs/server';

const coordinatesSearchParams = {
  categories: parseAsString.withDefault(''),
  color: parseAsString.withDefault(''),
  size: parseAsString.withDefault(''),
  price: parseAsInteger.withDefault(0),
  page: parseAsInteger.withDefault(1),
  sort: parseAsString.withDefault(''),
  search: parseAsString.withDefault(''),
};

export const loadSearchParams = createLoader(coordinatesSearchParams);
