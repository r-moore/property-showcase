import { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useAtom } from 'jotai';

import VSCLogo from 'assets/vsc.svg';
import { HeaderBtn } from 'components/Header/HeaderBtn';
import { LeadsBtn } from 'components/Header/LeadsBtn';
import { UserSettingsBtn } from 'components/Header/UserSettingsBtn';

import { Region } from 'components/Region/Region';
import { Developments } from 'components/Developments/Developments';
import { Availability } from 'components/Availability/Availability';
import { Leads } from 'components/Leads/Leads';
import { regionAtom } from 'atoms';
import { developmentAtom } from 'atoms';

function App(): JSX.Element {
  const [[page], setPage] = useState([0, 0]);
  const [region, setRegion] = useAtom(regionAtom);
  const [development, setDevelopment] = useAtom(developmentAtom);
  const location = useLocation();

  const tabs = [
    { title: 'Region', value: region, href: '/region' },
    {
      title: 'Developments',
      value: development ? development : 'All Developments',
      href: '/developments',
    },
    {
      title: 'Availability',
      value: 'Property Search',
      href: '/search',
    },
  ];

  return (
    <AnimateSharedLayout>
      <header className="flex items-center justify-center h-auto overflow-hidden shadow-xl md:px-6 md:h-24 bg-mirage-500">
        <div className="flex flex-col-reverse items-stretch justify-between w-full space-y-2 md:space-x-2 md:space-y-0 md:flex-row max-w-7xl">
          <div
            id="header-section-left"
            className="items-center hidden mr-2 md:flex"
          >
            <img src={VSCLogo} className="w-18 h-18" />
          </div>

          <div
            id="header-section-center"
            className="flex flex-row items-center justify-center h-20 overflow-hidden rounded-lg shadow-inner bg-mirage-600"
          >
            {tabs.map(({ title, value, href }, i) => {
              const isActive = location.pathname === href;
              return (
                <div
                  key={i}
                  onClick={() => setPage([i, i - page])}
                  className="relative flex items-stretch px-2 cursor-pointer"
                >
                  <HeaderBtn title={title} value={value} href={href} />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 z-0 -my-2 bg-mirage-700"
                      layoutId="menuItemBG"
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div id="header-section-right" className="flex justify-end space-x-2">
            <img src={VSCLogo} className="my-auto ml-2 h-14 w-14 md:hidden" />
            <div className="flex-grow md:hidden" />
            <LeadsBtn />
            <UserSettingsBtn />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl md:pt-5">
        <Switch>
          <Route path="/region" component={Region} />
          <Route path="/developments/:id?" component={Developments} />
          <Route path="/search/:id?" component={Availability} />
          <Route path="/leads/:id?" component={Leads} />
          <Redirect path="/" exact to="/region" />
        </Switch>
      </div>
    </AnimateSharedLayout>
  );
}

export default App;
