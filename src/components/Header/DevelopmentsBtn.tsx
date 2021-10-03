import { FC } from 'react';
import { Link, useRoute } from 'wouter';
import { ReactComponent as Circle } from 'assets/circle.svg';

export const DevelopmentsBtn: FC = () => {
  const [isActive] = useRoute('/developments');

  return (
    <Link
      className="flex flex-col justify-center h-12 px-2 overflow-hidden select-none md:h-full hover:cursor-pointer sm:px-4 group"
      to="/developments"
    >
      <div className="font-light tracking-wide opacity-50 text-2xs sm:text-xs">
        <span className="truncate">Development</span>
      </div>
      <div className="flex items-center text-xs font-medium sm:text-sm md:text-base">
        <span className="truncate border-b-2 border-transparent opacity-75 group-hover:border-white group-hover:opacity-100">
          All Developments
        </span>
        {isActive && <Circle className="w-auto h-2 py-px ml-2" />}
      </div>
    </Link>
  );
};