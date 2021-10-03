import { FC } from 'react';
import { motion } from 'framer-motion';
import { CardList, Card } from 'components/CardList/CardList';
import { useAtom } from 'jotai';
import { regionAtom } from 'atoms';
import { useLocation } from 'wouter';

export const Region: FC = () => {
  const [location, setLocation] = useLocation();
  const [region, setRegion] = useAtom(regionAtom);

  return (
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
          onClick={() => {
            setRegion('Dubai');
            setLocation('/developments');
          }}
        />
        <Card
          title="Spain"
          subtitle="Europe"
          buttonText="SELECT"
          image="/spain.jpg"
          onClick={() => {
            setRegion('Spain');
            setLocation('/developments');
          }}
        />
      </CardList>
    </motion.main>
  );
};
