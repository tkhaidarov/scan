'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from './constants';

const NavMenu = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center gap-[26px] md:flex-row md:gap-[49px]">
      {NAVIGATION_LINKS.map(link => {
        const { href, label } = link;
        return (
          <Link
            href={href}
            key={label}
            className={`md:hover:text-primary2 text-[16px] capitalize md:text-[14px] md:transition-all ${
              href === pathname
                ? 'md:border-primary2 md:text-primary2 text-foreground md:border-b-2'
                : 'md:text-foreground text-white'
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
