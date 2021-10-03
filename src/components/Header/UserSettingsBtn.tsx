import { FC } from 'react';
import { ReactComponent as DropdownIcon } from 'assets/triangle.svg';

export const UserSettingsBtn: FC = () => (
  <div className="flex items-center justify-center px-5 overflow-hidden font-medium rounded-l-lg shadow-inner select-none md:rounded-lg bg-mirage-600 hover:cursor-pointer group">
    <img
      src="/user-example.png"
      className="flex-shrink-0 w-8 h-8 border-2 rounded-full md:w-12 md:h-12 border-mirage-100"
    />
    <DropdownIcon className="flex-shrink-0 w-auto h-2 ml-3 -mb-px text-gray-300" />
  </div>
);
