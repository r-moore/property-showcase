import { FC } from 'react';
import { CardList, Card } from 'components/CardList/CardList';
import { motion } from 'framer-motion';

export const Developments: FC = () => (
  <main className="absolute w-full h-auto p-5 rounded-lg max-w-7xl bg-mirage-500">
    <CardList>
      <motion.div
        className="flex flex-col justify-between p-4 mb-5 overflow-hidden rounded-lg shadow-lg cursor-pointer select-none text-mirage-700 h-36 bg-sand-300"
        style={{
          backgroundImage: `url('/buildings.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '70%',
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div>
          <h2 className="text-lg font-semibold leading-6">All Developments</h2>
          <h4 className="text-xs font-light tracking-wide opacity-50">
            Region-wide avilability
          </h4>
        </div>
        <div className="self-end w-auto px-2 py-1 text-xs font-bold tracking-wide uppercase bg-white rounded-lg shadow-sm">
          Select
        </div>
      </motion.div>
    </CardList>
    <div className="mb-1">
      <h2 className="text-base leading-3 tracking-wide">Property Focus</h2>
      <h4 className="text-xs font-light leading-10 tracking-wide opacity-50">
        Click to see more details, including available units within the
        development
      </h4>
    </div>
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
