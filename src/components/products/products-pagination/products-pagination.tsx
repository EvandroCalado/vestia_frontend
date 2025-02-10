'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui';
import { Pagination as PaginationType } from '@/types';
import { generatePaginationNumbers } from '@/utils';

type ProductsPaginationProps = {
  pagination: PaginationType;
};

export const ProductsPagination = ({ pagination }: ProductsPaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;

  const { pageCount } = pagination;

  if (pageCount <= 1) return null;

  const allPages = generatePaginationNumbers({
    pageCount,
    currentPage: Number(currentPage),
  });

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 0) {
      return `${pathName}`;
    }

    if (Number(pageNumber) > pageCount) {
      return `${pathName}?${params.toString()}`;
    }

    params.set('page', pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageUrl(Number(currentPage) - 1)} />
        </PaginationItem>

        {allPages.map((page, index) => (
          <PaginationItem key={`${page}-${index}`}>
            <PaginationLink
              href={createPageUrl(Number(page))}
              isActive={page === Number(currentPage)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext href={createPageUrl(Number(currentPage) + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
