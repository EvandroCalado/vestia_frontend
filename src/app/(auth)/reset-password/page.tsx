import { ResetPasswordForm } from '@/components/auth';

type ResetPasswordPageProps = {
  searchParams: Promise<{ code: string }>;
};

const ResetPasswordPage = async ({ searchParams }: ResetPasswordPageProps) => {
  const { code } = await searchParams;

  return (
    <div className='flex items-center justify-center h-screen'>
      <ResetPasswordForm code={code} />
    </div>
  );
};

export default ResetPasswordPage;
