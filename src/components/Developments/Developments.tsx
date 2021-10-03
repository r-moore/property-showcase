import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';

export const Developments: FC = () => (
  <main className="w-full h-full p-5 rounded-lg max-w-7xl bg-mirage-500">
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Choose a Property Development
    </h2>
    <CardList>
      <div
        className="flex flex-col justify-between p-4 mb-5 overflow-hidden rounded-lg shadow-lg cursor-pointer select-none text-mirage-700 h-36 bg-sand-300"
        style={{
          backgroundImage: `url('/buildings.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '70%',
        }}
      >
        <h2 className="text-lg font-semibold leading-6">All Developments</h2>
        <div className="self-end w-auto px-2 py-1 text-xs font-bold tracking-wide uppercase bg-white rounded-lg shadow-sm">
          Select
        </div>
      </div>
    </CardList>
    <CardList>
      <Card
        title="Palm View"
        subtitle="by NAKHEEL"
        buttonText="DETAILS"
        image="/photos/bedroom.jpg"
      />
      <Card
        title="The Address"
        subtitle="by EMAAR"
        buttonText="DETAILS"
        image="/photos/tower-dusk.jpg"
      />
      <Card
        title="Sparkle Towers"
        subtitle="by TEBYAN"
        buttonText="DETAILS"
        image="/photos/poolside.jpg"
      />
    </CardList>
  </main>
);
