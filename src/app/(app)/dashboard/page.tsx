import { getUserMe } from '@/services';

const DashboardPage = async () => {
  const user = await getUserMe();

  return (
    <div className='flex flex-col text-white items-center justify-center w-full gap-6 h-4/5'>
      <h2 className='font-semibold text-xl'>User strapi data</h2>
      <pre>{JSON.stringify(user.data, null, 2)}</pre>
    </div>
  );
};

export default DashboardPage;
