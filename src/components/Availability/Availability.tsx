import { FC } from 'react';
import { motion } from 'framer-motion';
import { variants, pageTransition } from 'animationVariants';

export const Availability: FC = () => (
  <motion.main
    className="absolute w-full h-full p-5 rounded-lg max-w-7xl bg-mirage-500"
    variants={variants}
    transition={pageTransition}
    initial="initial"
    animate="in"
    exit="out"
  >
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Availability
    </h2>
  </motion.main>
);
