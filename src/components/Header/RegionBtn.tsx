import { FC } from 'react';
import { ReactComponent as DropdownIcon } from 'assets/triangle.svg';

export const RegionBtn: FC = () => (
  <div className="flex flex-col justify-center h-12 px-2 overflow-hidden opacity-75 select-none md:h-full hover:bg-mirage-600 hover:cursor-pointer sm:px-4">
    <div className="font-light tracking-wide opacity-50 text-2xs sm:text-xs">
      <span className="truncate">Region</span>
    </div>
    <div className="flex items-center text-xs font-medium sm:text-sm md:text-base">
      <span className="truncate">Dubai</span>
      <DropdownIcon className="w-auto h-2 py-px ml-2 -mb-px -rotate-90" />
    </div>
  </div>
);
