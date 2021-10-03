import { FC } from 'react';
import { ReactComponent as DropdownIcon } from 'assets/triangle.svg';

export const DevelopmentBtn: FC = () => (
  <div className="flex flex-col justify-center h-12 px-2 overflow-hidden rounded-lg select-none md:h-full hover:bg-mirage-600 hover:cursor-pointer sm:px-4">
    <div className="font-light opacity-50 text-2xs sm:text-xs md:text-sm">
      <span className="truncate">Development</span>
    </div>
    <div className="flex items-center text-xs font-medium sm:text-sm md:text-base">
      <span className="truncate">All Developments</span>
      <DropdownIcon className="w-auto h-2 ml-2 -mb-px text-gray-300" />
    </div>
  </div>
);