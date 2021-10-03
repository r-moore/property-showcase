import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';

export const Region: FC = () => (
  <main className="absolute w-full h-auto p-5 rounded-lg max-w-7xl bg-mirage-500">
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Choose a Sales Region
    </h2>
    <CardList>
      <Card
        title="Dubai"
        subtitle="Middle East"
        buttonText="SELECT"
        image="/UAE.jpg"
      />
      <Card
        title="Spain"
        subtitle="Europe"
        buttonText="SELECT"
        image="/spain.jpg"
      />
    </CardList>
  </main>
);
