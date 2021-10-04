import { FC } from 'react';
import { motion } from 'framer-motion';
import { CardList, Card } from 'components/CardList/CardList';
import { useAtom } from 'jotai';
import { regionAtom, developmentAtom } from 'atoms';
import { useHistory } from 'react-router-dom';

export const Region: FC = () => {
  const history = useHistory();
  const [region, setRegion] = useAtom(regionAtom);
  const [development, setDevelopment] = useAtom(developmentAtom);

  return (
    <motion.main
      className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
        Choose a Sales Region
      </h2>
      <CardList>
        <Card
          id="dubai"
          title="Dubai"
          subtitle="Middle East"
          buttonText="SELECT"
          image="/regions/dubai.jpg"
          onClick={() => {
            setRegion('Dubai');
            setDevelopment(null);
            history.push('/developments');
          }}
        />
        <Card
          id="spain"
          title="Spain"
          subtitle="Europe"
          buttonText="SELECT"
          image="/regions/spain.jpg"
          onClick={() => {
            setRegion('Spain');
            setDevelopment(null);
            history.push('/developments');
          }}
        />
      </CardList>
    </motion.main>
  );
};
