import Link from 'next/link';

import { AmexIcon, MasterCardIcon, VisaIcon } from '@/icons';
import { Logo } from '../logo';

const links = [
  {
    id: 350,
    title: 'support',
    nested: ['faq', 'terms of use', 'privacy policy'],
  },
  {
    id: 351,
    title: 'company',
    nested: ['about us', 'contact', 'careers'],
  },
  {
    id: 352,
    title: 'shop',
    nested: ['my account', 'checkout', 'cart'],
  },
];

export const Footer = () => {
  return (
    <footer className='container mx-auto p-5'>
      <div className='flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16'>
        <div className='flex w-full flex-col items-center md:mb-auto md:w-1/5 md:items-start'>
          <Logo className='mb-6' />
          <p className='text-center text-sm text-muted-foreground md:text-start'>
            DevCut is a YouTube channel for practical project-based learning.
          </p>
        </div>

        <div className='flex w-full justify-between gap-5 md:w-3/5 md:gap-6'>
          {links.map((link) => (
            <div
              key={`${link.id}-${link.title}`}
              className='flex flex-col text-muted-foreground'
            >
              <p className='mb-6 font-light uppercase'>{link.title}</p>

              {link.nested.map((nest) => (
                <Link
                  key={nest}
                  href={nest}
                  className='mb-3 text-sm capitalize hover:text-primary'
                >
                  {nest}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className='flex w-full flex-col items-center text-muted-foreground md:mb-auto md:w-1/5 md:items-start'>
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
