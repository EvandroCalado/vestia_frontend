import { AmexIcon, MasterCardIcon, VisaIcon } from '@/icons';
import Link from 'next/link';

import { Logo } from '../logo';

const links = [
  {
    id: 1,
    title: 'support',
    nested: ['faq', 'terms of use', 'privacy policy'],
  },
  {
    id: 2,
    title: 'company',
    nested: ['about us', 'contact', 'careers'],
  },
  {
    id: 3,
    title: 'shop',
    nested: ['my account', 'checkout', 'cart'],
  },
];

export const Footer = () => {
  return (
    <footer className='container p-5 mx-auto mt-16'>
      <div className='flex flex-col items-center justify-between gap-8 md:gap-16 md:flex-row'>
        <div className='flex flex-col items-center w-full md:mb-auto md:items-start md:w-1/5'>
          <Logo className='mb-6' />
          <p className='text-sm text-center md:text-start text-muted-foreground'>
            DevCut is a YouTube channel for practical project-based learning.
          </p>
        </div>

        <div className='flex justify-between w-full gap-5 md:w-3/5 md:gap-6'>
          {links.map((link) => (
            <div
              key={`${link.id}-${link.title}`}
              className='flex flex-col text-muted-foreground'
            >
              <p className='mb-6 font-light uppercase'>{link.title}</p>

              {link.nested.map((nest) => (
                <Link
                  href={nest}
                  className='mb-3 text-sm capitalize hover:text-primary'
                >
                  {nest}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center w-full md:mb-auto md:items-start md:w-1/5 text-muted-foreground'>
          <p className='mb-6 font-light uppercase'>accepted payments</p>

          <div className='flex items-center gap-3'>
            <AmexIcon />
            <MasterCardIcon />
            <VisaIcon />
          </div>
        </div>
      </div>

      <p className='mt-5 text-center text-muted-foreground'>
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
