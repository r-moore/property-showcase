import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';

export const Region: FC = () => (
  <main className="w-full h-full p-5 rounded-lg bg-mirage-500 max-w-7xl">
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Choose a Sales Region
    </h2>
    <CardList>
      <Card title="Dubai" subtitle="UAE" buttonText="SELECT" image="/UAE.jpg" />
    </CardList>
  </main>
);
