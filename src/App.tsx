import { Switch, Route, useLocation } from 'wouter';
import { AnimatePresence } from 'framer-motion';

import { Header } from 'components/Header/Header';
import { Region } from 'components/Region/Region';
import { Developments } from 'components/Developments/Developments';
import { Availability } from 'components/Availability/Availability';

function App(): JSX.Element {
  const [location] = useLocation();

  return (
    <>
      <Header />
      <div className="flex items-start justify-center md:pt-5 md:px-5">
        <AnimatePresence>
          <Switch location={location} key={location}>
            <Route path="/region" component={Region} />
            <Route path="/developments" component={Developments} />
            <Route path="/availability" component={Availability} />
            <Route component={Developments} />
          </Switch>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
