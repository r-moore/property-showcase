import { FC } from 'react';
import UserImage from 'assets/user-example.png';
import { ReactComponent as DropdownIcon } from 'assets/triangle.svg';

export const UserSettingsBtn: FC = () => (
  <div className="flex items-center justify-center px-5 overflow-hidden font-medium rounded-lg select-none bg-mirage-600 hover:cursor-pointer hover:bg-mirage-700">
    <img
      src={UserImage}
      className="w-12 h-12 border-2 rounded-full border-mirage-100"
    />
    <DropdownIcon className="w-auto h-2 ml-3 -mb-px text-gray-300" />
  </div>
);
