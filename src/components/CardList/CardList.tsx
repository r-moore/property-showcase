import { FC } from 'react';

export const CardList: FC = ({ children }) => (
  <div className="grid grid-cols-2 gap-5 md:grid-cols-3">{children}</div>
);

interface ICard {
  title?: string;
  image?: string;
}

export const Card: FC<ICard> = ({ children, image, title }) => (
  <div
    className="flex flex-col justify-between overflow-hidden bg-gray-200 bg-cover rounded-lg"
    style={{ backgroundImage: `url('${image}')` }}
  >
    <h2 className="p-3 text-lg">{title}</h2>
    <footer className="h-12 p-3 font-medium rounded-b-lg backdrop-blur-md text-mirage-600">
      {children}
    </footer>
  </div>
);
