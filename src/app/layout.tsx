import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import '@/styles/globals.css';

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vestia Shop',
  description: 'Affordable and stylish fashion for every occasion.',
  icons: {
    icon: '/favicon.ico',
  },
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body className={`${primary.variable} antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
};

export default RootLayout;
