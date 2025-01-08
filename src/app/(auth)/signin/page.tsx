import { AuthBlock, SignInForm } from '@/components/auth';
import { Logo } from '@/components/shared';

const SignInPage = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-5 h-full'>
      <div className='relative col-span-2 max-md:hidden h-full flex justify-end bg-[url("/bg.jpg")]'>
        <Logo className='absolute left-5 top-5' />
        <AuthBlock
          label='Sign In'
          title='Welcome back!'
          subTitle='Enter to you credentials'
        />
      </div>

      <div className='col-span-3 flex items-center justify-center'>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
