import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vestia Shop',
  description: 'Affordable and stylish fashion for every occasion.',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body
        className={`${primary.variable} antialiased flex h-screen flex-col`}
      >
        <main className='flex-1'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
