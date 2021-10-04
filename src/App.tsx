import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
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

function App(): JSX.Element {
  const [[page], setPage] = useState([0, 0]);
  const [region, setRegion] = useAtom(regionAtom);

  const tabs = [
    { title: 'Region', value: region, href: '/region' },
    {
      title: 'Developments',
      value: 'All Developments',
      href: '/developments',
    },
    { title: 'Availability', value: 'All Properties', href: '/availability' },
  ];

  return (
    <Router>
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
              className="flex flex-row items-center justify-center h-20 overflow-hidden rounded-lg bg-mirage-600"
            >
              {tabs.map(({ title, value, href }, i) => {
                const isActive = href === location.pathname;
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

            <div
              id="header-section-right"
              className="flex justify-end space-x-2"
            >
              <img src={VSCLogo} className="my-auto ml-2 h-14 w-14 md:hidden" />
              <div className="flex-grow md:hidden" />
              <LeadsBtn />
              <UserSettingsBtn />
            </div>
          </div>
        </header>

        <div className="flex items-start justify-center md:pt-5 md:px-5">
          <Switch>
            <Route path="/region" component={Region} />
            <Route
              path={['/developments', '/developments/:id']}
              component={Developments}
            />
            <Route path="/availability" component={Availability} />
            <Route path="/leads" component={Leads} />
            <Route component={Region} />
          </Switch>
        </div>
      </AnimateSharedLayout>
    </Router>
  );
}

export default App;
