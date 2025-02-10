type GeneratePaginationNumbersProps = {
  currentPage: number;
  pageCount: number;
};

export const generatePaginationNumbers = ({
  currentPage,
  pageCount,
}: GeneratePaginationNumbersProps) => {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', pageCount - 1, pageCount];
  }

  if (currentPage >= pageCount - 2) {
    return [1, 2, '...', pageCount - 2, pageCount - 1, pageCount];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    pageCount,
  ];
};
