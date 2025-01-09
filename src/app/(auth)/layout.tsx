export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className='flex-1'>{children}</main>;
};

export default AuthLayout;
