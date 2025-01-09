import { ForgotPasswordForm } from '@/components/auth';

const ForgotPasswordPage = ({ className }: { className?: string }) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
