import { cn, navLinks } from '@/lib/utils';
import Link from 'next/link';

export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn('flex items-center gap-4 text-muted-foreground', className)}
    >
      {navLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className='hover:text-primary duration-150'
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
