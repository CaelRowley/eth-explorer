"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  PowerIcon,
  HomeIcon,
  DocumentTextIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

import Logo from '@/app/ui/logo';

const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Blocks',
    href: '/dashboard/blocks',
    icon: CubeIcon,
  },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    icon: DocumentTextIcon,
  },
];


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <Link
            className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-500 p-4 md:h-40"
            href="/"
          >
            <div className="w-32 text-white md:w-40">
              <Logo />
            </div>
          </Link>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <>
              {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                      {
                        'bg-sky-100 text-blue-600': pathname === link.href,
                      },
                    )}
                  >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                  </Link>
                );
              })}
            </>
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <form>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}