type AuthBlockProps = {
  label: string;
  title: string;
  subTitle: string;
};

export const AuthBlock = ({ label, title, subTitle }: AuthBlockProps) => {
  return (
    <>
      <div className='w-4/5 flex flex-col gap-8 p-5 items-center justify-center'>
        <h2 className='text-4xl font-bold text-white'>{title}</h2>
        <h2 className='text-xl font-bold text-white'>{subTitle}</h2>
      </div>
      <div className='w-1/5 flex flex-col'>
        <div className='h-full rounded-br-md' />
        <div className='h-[10%] bg-white flex items-center justify-center text-xs font-bold rounded-l-md'>
          {label}
        </div>
        <div className='h-full rounded-tr-md' />
      </div>
    </>
  );
};
