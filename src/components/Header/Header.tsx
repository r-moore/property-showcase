import { FC } from 'react';

import VSCLogo from 'assets/vsc.svg';
import { SalesRegionBtn } from './SalesRegionBtn';
import { DevelopmentBtn } from './DevelopmentBtn';
import { PropertyBtn } from './PropertyBtn';
import { LeadsBtn } from './LeadsBtn';
import { UserSettingsBtn } from './UserSettingsBtn';

export const Header: FC = () => (
  <header className="flex items-center justify-center h-auto px-4 overflow-hidden md:h-24 bg-mirage-500">
    <div className="flex flex-col items-stretch justify-between w-full space-x-2 md:flex-row max-w-7xl">
      <div id="header-section-left" className="items-center hidden md:flex">
        <img src={VSCLogo} className="w-18 h-18 lg:ml-2" />
      </div>
      <div
        id="header-section-center"
        className="flex flex-col justify-center md:flex-row md:space-x-2"
      >
        <SalesRegionBtn />
        <DevelopmentBtn />
        <PropertyBtn />
      </div>
      <div id="header-section-right" className="flex justify-end space-x-2">
        <LeadsBtn />
        <UserSettingsBtn />
      </div>
    </div>
  </header>
);
