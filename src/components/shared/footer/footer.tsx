import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <p className='text-center text-muted-foreground p-5'>
        &copy;{' '}
        <Link
          href='https://github.com/EvandroCalado'
          target='_blank'
          className='hover:text-primary'
        >
          Evandro Calado
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};
