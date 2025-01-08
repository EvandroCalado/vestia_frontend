import { AuthBlock, SignUpForm } from '@/components/auth';
import { Logo } from '@/components/shared';

const SignUpPage = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center md:grid-cols-5 h-full'>
      <div className='relative col-span-2 max-md:hidden h-full flex justify-end bg-[url("/bg.jpg")]'>
        <Logo className='absolute left-5 top-5' />
        <AuthBlock
          label='Sign Up'
          title='Welcome!'
          subTitle='Create you account'
        />
      </div>

      <div className='col-span-3 flex items-center justify-center'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
