import { FC } from 'react';

import VSCLogo from 'assets/vsc.svg';
import { RegionBtn } from './RegionBtn';
import { DevelopmentBtn } from './DevelopmentBtn';
import { PropertyBtn } from './PropertyBtn';
import { LeadsBtn } from './LeadsBtn';
import { UserSettingsBtn } from './UserSettingsBtn';

export const Header: FC = () => (
  <header className="flex items-center justify-center h-auto overflow-hidden md:px-6 md:h-24 bg-mirage-500">
    <div className="flex flex-col-reverse items-stretch justify-between w-full space-y-2 md:space-x-2 md:space-y-0 md:flex-row max-w-7xl">
      <div
        id="header-section-left"
        className="items-center hidden mr-2 md:flex"
      >
        <img src={VSCLogo} className="w-18 h-18" />
      </div>
      <div
        id="header-section-center"
        className="flex flex-row items-center justify-center h-20 px-2 rounded-lg bg-mirage-600"
      >
        <RegionBtn />
        <DevelopmentBtn />
        <PropertyBtn />
      </div>
      <div id="header-section-right" className="flex justify-end space-x-2">
        <img src={VSCLogo} className="my-auto ml-2 h-14 w-14 md:hidden" />
        <div className="flex-grow md:hidden" />
        <LeadsBtn />
        <UserSettingsBtn />
      </div>
    </div>
  </header>
);
