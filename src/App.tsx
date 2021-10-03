import { Header } from 'components/Header/Header';
import { Developments } from 'components/Developments/Developments';
import { Regions } from 'components/Regions/Regions';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center pt-2 mx-2 md:pt-5 md:px-5">
        <Regions />
      </div>
    </>
  );
}

export default App;
