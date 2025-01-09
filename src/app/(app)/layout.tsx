import { Footer, Header } from '@/components/shared';

export const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
