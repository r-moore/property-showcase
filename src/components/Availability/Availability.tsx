import { FC } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as BedIcon } from 'assets/unit/bedrooms.svg';
import { ReactComponent as BathIcon } from 'assets/unit/bathrooms.svg';
import { ReactComponent as CarIcon } from 'assets/unit/parking.svg';
import { ReactComponent as SizeIcon } from 'assets/unit/size.svg';

const units = [
  {
    id: '37',
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    price: 3000000,
    image: '/units/lobby.jpg',
  },
  {
    id: '252',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    size: 220,
    view: 'Marina View',
    price: 3000000,
    image: '/units/bedroom.jpg',
  },
  {
    id: '253',
    bedrooms: 6,
    bathrooms: 3,
    parking: 3,
    price: 3000000,
    view: 'Beach View',
    image: '/units/poolside.jpg',
    size: 320,
  },
];

export const Availability: FC = () => (
  <motion.main
    className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <h2 className="mb-3 text-xs font-light tracking-wide opacity-50">
      Avalable Units
    </h2>

    <div className="flex flex-col space-y-1 overflow-hidden rounded-lg">
      {units.map((info) => (
        <Unit {...info} />
      ))}
    </div>
  </motion.main>
);

interface IUnit {
  id: string;
  price: number;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  view?: string;
  size?: number;
}

const Unit: FC<IUnit> = ({
  id,
  price,
  image,
  bedrooms,
  bathrooms,
  parking,
  view,
  size,
}) => {
  const fmt = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'AED',
  });

  return (
    <div className="flex items-stretch p-3 space-x-3 rounded-lg bg-mirage-600">
      <img src={image} className="object-cover w-20 rounded-lg md:h-20" />
      <div className="flex flex-col space-y-1">
        <div className="flex flex-wrap items-center text-sm font-light md:space-x-2">
          <h3 className="text-lg font-medium">Palm View, Unit {id}</h3>
          {view && (
            <div className="px-2 py-px font-medium tracking-wide text-white border rounded-full opacity-50 select-none text-2xs">
              {view}
            </div>
          )}
        </div>
        <h4 className="text-sm tracking-wide opacity-75">
          {fmt.format(price).replace(/\.00$/, '')}
        </h4>
        <div className="flex flex-wrap text-sm font-light opacity-75 md:space-x-2">
          {bedrooms && (
            <span className="flex items-center pr-2">
              <BedIcon className="h-5 mr-1 -mb-1" />
              {bedrooms} bedrooms
            </span>
          )}
          {bathrooms && (
            <span className="flex items-center pr-2">
              <BathIcon className="h-5 mr-1 -mb-1" />
              {bathrooms} bathrooms
            </span>
          )}
          {parking && (
            <span className="flex items-center pr-2">
              <CarIcon className="h-5 mr-1 -mb-1" />
              {parking} car spaces
            </span>
          )}
          {size && (
            <span className="flex items-center pr-2">
              <SizeIcon className="h-5 mr-1 -mb-1" />
              {size} sq.ft.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
