import { Footer, Header } from '@/components/shared';

export const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </main>
  );
};

export default AppLayout;
