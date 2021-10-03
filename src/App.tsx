import { Header } from 'components/Header/Header';
import { CardList, Card } from 'components/CardList/CardList';
import photo from 'assets/photos/bedroom.jpg';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center px-5 pt-5">
        <main className="w-full h-full p-5 rounded-lg max-w-7xl bg-mirage-600">
          <CardList>
            <Card title="One" image="/photos/bedroom.jpg">
              Subtitle
            </Card>
            <Card>Two</Card>
            <Card>Three</Card>
            <Card>Four</Card>
          </CardList>
        </main>
      </div>
    </>
  );
}

export default App;
