'use client';

import { usePathname } from 'next/navigation';

import {
  Breadcrumb as BreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui';

export const Breadcrumb = () => {
  const path = usePathname().replace('/', '');

  return (
    <>
      <h2 className='mb-4 capitalize'>{path}</h2>

      <BreadCrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className='capitalize'>{path}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadCrumb>
    </>
  );
};
