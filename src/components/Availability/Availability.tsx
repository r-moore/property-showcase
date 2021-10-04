import { FC } from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as DropdownIcon } from 'assets/triangle.svg';
import { ReactComponent as BedIcon } from 'assets/unit/bedrooms.svg';
import { ReactComponent as BathIcon } from 'assets/unit/bathrooms.svg';
import { ReactComponent as CarIcon } from 'assets/unit/parking.svg';
import { ReactComponent as SizeIcon } from 'assets/unit/size.svg';
import { ReactComponent as ReloadIcon } from 'assets/reload.svg';
import { ReactComponent as ClearIcon } from 'assets/remove.svg';

import units from './units';

export const Availability: FC = () => (
  <motion.main
    className="w-full h-auto p-5 md:rounded-lg bg-mirage-500"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <div className="flex flex-col p-3 mb-4 space-y-1 overflow-hidden rounded-lg bg-sand-300 text-mirage-600">
      <div className="flex items-center space-x-5">
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Min Bedrooms
          </label>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            1<DropdownIcon className="w-3 h-3 ml-2 text-mirage-400" />
          </div>
        </div>
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Min Price
          </label>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            100,000
            <DropdownIcon className="w-3 h-3 ml-2 text-mirage-400" />
          </div>
        </div>
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Max Price
          </label>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            800,000
            <DropdownIcon className="w-3 h-3 ml-2 text-mirage-400" />
          </div>
        </div>
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Views
          </label>
          <div className="flex items-center p-3 space-x-1 bg-white rounded-lg">
            <span className="px-2 py-1 text-sm font-medium bg-teal-400 rounded-full bg-opacity-40">
              Marina
            </span>
            <span className="px-2 py-1 text-sm font-medium bg-teal-400 rounded-full bg-opacity-40">
              Beach
            </span>
            <ClearIcon className="w-5 h-5 rotate-45 text-mirage-100" />
          </div>
        </div>
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Areas
          </label>
          <div className="flex items-center p-3 space-x-1 bg-white rounded-lg">
            <span className="px-2 py-1 text-sm font-medium rounded-full bg-sand-700 bg-opacity-40">
              Downtown
            </span>
            <ClearIcon className="w-5 h-5 rotate-45 text-mirage-100" />
          </div>
        </div>
        <div className="flex-grow" />
        <div>
          <label className="font-light tracking-wide uppercase opacity-75 text-2xs">
            Reload
          </label>
          <ReloadIcon className="self-end w-12 h-12" />
        </div>
      </div>
    </div>

    <div className="flex flex-col space-y-2 overflow-hidden rounded-lg">
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
