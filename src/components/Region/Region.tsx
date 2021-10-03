import { FC } from 'react';
import { motion } from 'framer-motion';
import { CardList, Card } from 'components/CardList/CardList';

export const Region: FC = () => (
  <motion.main
    className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
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
  </motion.main>
);
