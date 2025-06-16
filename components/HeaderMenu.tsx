'use client';
import React from 'react';
import { headerData } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu = () => {
  const pathName = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold ">
      {headerData?.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`hover:text-darkColor hoverEffect relative group ${pathName === item.href && 'text-darkColor'}`}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathName === item.href && 'w-1/2'}`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathName === item.href && 'w-1/2'}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
