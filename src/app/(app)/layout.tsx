import { Header } from '@/components/shared';

export const AppLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-[url("/bg.jpg")] h-full'>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
