import React from 'react';
import { productType } from '../constants';
import { Repeat } from 'lucide-react';

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div
      className="flex items-center gap-1.5 text-sm font-semibold
        "
    >
      <div className="flex items-center gap-1.5">
        {productType?.map((item) => (
          <button
            key={item?.title}
            onClick={() => onTabSelect(item?.title)}
            className={`border border-darkColor px-4 py-1.5 md:py-2 hover:bg-darkColor hover:text-white rounded-full hoverEffect ${selectedTab === item.title && 'bg-darkColor text-white'} `}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <button className="border border-darkColor p-2 hover:bg-darkColor hover:text-white rounded-full hoverEffect">
        {' '}
        <Repeat className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeTabbar;
