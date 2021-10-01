import logo from 'assets/logo.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { MyComponent } from 'components/Component';

function App(): JSX.Element {
  return (
    <>
      <header className="flex items-center space-x-2 bg-blue-900">
        <Logo className="w-16 h-16" />
        <img src={logo} className="w-16 h-16" />
        <p>Hello Vite + React!</p>
      </header>
      <main className="p-5">
        <MyComponent />
      </main>
    </>
  );
}

export default App;
