import { Router, Switch, Route } from 'wouter';

import { Header } from 'components/Header/Header';
import { Region } from 'components/Region/Region';
import { Developments } from 'components/Developments/Developments';
import { Availability } from 'components/Availability/Availability';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <div className="flex items-start justify-center pt-2 md:pt-5 md:px-5">
        <Switch>
          <Route path="/region" component={Region} />
          <Route path="/developments" component={Developments} />
          <Route path="/availability" component={Availability} />
          <Route component={Developments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
