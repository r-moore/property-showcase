import { FC } from 'react';
import { motion } from 'framer-motion';

export const CardList: FC = ({ children }) => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {children}
  </div>
);

interface ICard {
  id: string;
  title?: string;
  image?: string;
  subtitle?: string;
  buttonText?: string;
  onClick?: () => any;
}

export const Card: FC<ICard> = ({
  id,
  image,
  title,
  subtitle,
  buttonText,
  onClick,
}) => {
  return (
    <motion.div
      className="flex flex-col justify-end h-64 overflow-hidden bg-gray-300 bg-cover rounded-lg shadow-lg cursor-pointer select-none"
      style={{ backgroundImage: image ? `url('${image}')` : undefined }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      layoutId={`card-${id}`}
    >
      <motion.footer
        className="flex items-stretch justify-between h-20 px-4 font-medium bg-white rounded-b-lg bg-opacity-20 backdrop-blur-md text-mirage-700"
        layoutId={`card-footer-${id}`}
      >
        <motion.div
          layoutId={`card-${id}-footer-left`}
          className="flex flex-col items-start justify-center"
        >
          <h2 className="text-xl font-semibold leading-6">{title}</h2>
          <h4 className="text-xs font-light opacity-75">{subtitle}</h4>
        </motion.div>

        {buttonText && (
          <motion.div
            layoutId={`card-${id}-footer-right`}
            className="flex items-end pb-4"
          >
            <div className="px-2 py-1 text-xs font-bold tracking-wide uppercase bg-white rounded-lg shadow-sm">
              {buttonText}
            </div>
          </motion.div>
        )}
      </motion.footer>
    </motion.div>
  );
};
