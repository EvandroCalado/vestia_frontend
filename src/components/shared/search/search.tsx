import { Input } from '@/components/ui';
import { SearchIcon } from '@/icons';
import { cn } from '@/lib/utils';

export const Search = ({ className }: { className?: string }) => {
  return (
    <div className={cn('w-full md:w-56 lg:w-72 relative', className)}>
      <SearchIcon className='absolute left-2 top-1/2 -translate-y-1/2' />
      <Input type='search' placeholder='Search products' className='pl-10' />
    </div>
  );
};
