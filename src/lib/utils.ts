import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export const navLinks = [
  {
    id: 1,
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    label: 'Products',
    href: '/products',
  },
  {
    id: 3,
    label: 'About',
    href: '/about',
  },
  {
    id: 4,
    label: 'Contact',
    href: '/contact',
  },
];
