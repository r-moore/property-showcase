import { FC } from 'react';

export const PropertyBtn: FC = () => (
  <div className="flex flex-col justify-center h-12 px-2 overflow-hidden opacity-75 select-none md:h-full hover:cursor-pointer sm:px-4">
    <div className="font-light tracking-wide opacity-50 text-2xs sm:text-xs">
      <span className="truncate">Availability</span>
    </div>
    <div className="flex items-center text-xs font-medium sm:text-sm md:text-base">
      <span className="truncate">All Properties</span>
    </div>
  </div>
);
