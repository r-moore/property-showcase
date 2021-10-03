import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';
import { motion } from 'framer-motion';
import { variants, pageTransition } from 'animationVariants';

export const Region: FC = () => (
  <motion.main
    className="absolute w-full h-auto p-5 rounded-lg max-w-7xl bg-mirage-500"
    variants={variants}
    transition={pageTransition}
    initial="initial"
    animate="in"
    exit="out"
  >
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Choose a Sales Region
    </h2>
    <CardList>
      <Card title="Dubai" subtitle="UAE" buttonText="SELECT" image="/UAE.jpg" />
    </CardList>
  </motion.main>
);
