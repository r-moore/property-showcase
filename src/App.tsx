import { Header } from 'components/Header/Header';
import { Route } from 'wouter';
import { Developments } from 'components/Developments/Developments';
import { Regions } from 'components/Regions/Regions';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center pt-2 md:pt-5 md:px-5">
        <Route path="/regions" component={Regions} />
        <Route path="/developments" component={Developments} />
        <Route component={Developments} />
      </div>
    </>
  );
}

export default App;
