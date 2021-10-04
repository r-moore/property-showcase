import { FC } from 'react';
import { motion } from 'framer-motion';

export const Availability: FC = () => (
  <motion.main
    className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Availability
    </h2>
  </motion.main>
);
