import { Header } from 'components/Header/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center px-5 pt-5">
        <main className="w-full h-full p-5 rounded-lg max-w-7xl bg-mirage-600">
          Hello
        </main>
      </div>
    </>
  );
}

export default App;
