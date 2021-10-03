import { FC } from 'react';

interface IHeaderBtn {
  title: string;
  value: string;
  isActive?: boolean;
}

export const HeaderBtn: FC<IHeaderBtn> = ({
  title,
  value,
  isActive = false,
}) => {
  const className = `relative inset-0 z-20 p-4 flex flex-col justify-center h-full px-2 overflow-hidden select-none md:h-full hover:cursor-pointer sm:px-4`;

  return (
    <div className={className}>
      <div className="font-light tracking-wide opacity-50 text-2xs sm:text-xs">
        <span className="truncate">{title}</span>
      </div>
      <div className="flex items-center text-xs font-medium sm:text-sm md:text-base">
        <span className="truncate">{value}</span>
      </div>
    </div>
  );
};
