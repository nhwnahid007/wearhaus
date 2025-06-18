import React, { FC } from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { X } from 'lucide-react';
import { headerData } from '../constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '../hooks/useOutsideClick';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void; //nothing to return
}

const SideBar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const SideBarRef= useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl hoverEffect cursor-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={SideBarRef}
        className="min-w-72 max-w-96 bg-darkColor text-white/70 h-full border-r border-r-white flex flex-col gap-6 p-10 "
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">WearHaus</Logo>
          </button>
          <button onClick={onClose} className="hoverEffect hover:text-red-500 ">
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className={`hover:text-white hoverEffect relative group w-24 ${pathName === item.href && 'text-white'}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default SideBar;
