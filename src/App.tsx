import { Suspense, useState } from 'react';
// import { Switch, Route } from 'wouter';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { variants } from 'animationVariants';

import VSCLogo from 'assets/vsc.svg';
import { HeaderBtn } from 'components/Header/HeaderBtn';
import { LeadsBtn } from 'components/Header/LeadsBtn';
import { UserSettingsBtn } from 'components/Header/UserSettingsBtn';

import { Region } from 'components/Region/Region';
import { Developments } from 'components/Developments/Developments';
import { Availability } from 'components/Availability/Availability';

function App(): JSX.Element {
  const [[page, direction], setPage] = useState([0, 0]);

  const tabs = [
    { title: 'Region', value: 'Dubai', body: <Region /> },
    {
      title: 'Developments',
      value: 'All Developments',
      body: <Developments />,
    },
    { title: 'Availability', value: 'All Properties', body: <Availability /> },
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
            className="flex flex-row items-center justify-center h-20 overflow-hidden rounded-lg bg-mirage-600"
          >
            {tabs.map(({ title, value }, i) => {
              const isActive = i === page;
              return (
                <div
                  key={i}
                  onClick={() => setPage([i, i - page])}
                  className="relative flex items-center cursor-pointer"
                >
                  <HeaderBtn title={title} value={value} isActive={isActive} />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 z-0 -my-2 border-b-8 border-white bg-mirage-700"
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

      <div className="flex items-start justify-center md:pt-5 md:px-5">
        <AnimatePresence initial={false} custom={direction}>
          <motion.section
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30, duration: 2 },
            }}
            className="w-full max-w-7xl"
          >
            <Suspense fallback={null}>{tabs[page].body}</Suspense>
          </motion.section>
          {/* <Switch>
            <Route path="/region" component={Region} />
            <Route path="/developments" component={Developments} />
            <Route path="/availability" component={Availability} />
            <Route component={Region} />
          </Switch> */}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>
  );
}

export default App;
