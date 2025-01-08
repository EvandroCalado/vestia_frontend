import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import '../styles/globals.css';

const geistSans = Geist({
  variable: '--font-primary',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Strapi auth template',
  description: 'Authentication next with strapi',
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body
        className={`${geistSans.variable} antialiased flex h-screen flex-col`}
      >
        <main className='flex-1'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
