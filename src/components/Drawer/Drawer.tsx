import React from 'react';
import clsx from 'clsx';
import {
  AnimatePresence,
  DraggableProps,
  motion,
  useMotionValue,
} from 'framer-motion';

type Position = 'left' | 'right' | 'bottom';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  position?: Position;
};

const getMotionProps = (desiredPosition: Position) => {
  switch (desiredPosition) {
    case 'right':
      return {
        initial: {
          x: '100%',
        },
        animate: { x: 0 },
        exit: { x: '100%' },
        drag: 'x',
      };
    case 'bottom':
      return {
        initial: {
          y: '100%',
        },
        animate: { y: 0 },
        exit: { y: '100%' },
        drag: 'y',
      };
    case 'left':
      return {
        initial: {
          x: '-100%',
        },
        animate: { x: 0 },
        exit: { x: '-100%' },
        drag: 'x',
      };
    default:
      return {
        initial: {
          y: '100%',
        },
        animate: { y: 0 },
        exit: { y: '100%' },
        drag: 'y',
      };
  }
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen = false,
  children,
  onClose,
  className,
  position = 'right',
}) => {
  const motionValue = useMotionValue(0);
  const isPositionBottom = Boolean(position === 'bottom');
  const isPositionLeft = Boolean(position === 'left');
  const isPositionRight = Boolean(position === 'right');

  const drawerClasses = clsx(
    className,
    'fixed bg-white z-20 text-white shadow-2xl top-0 right-0 bottom-0 w-full max-w-lg h-screen p-5 overflow-y-auto',
    {
      'max-w-full max-h-96 top-auto': isPositionBottom,
      'left-0 right-auto': isPositionLeft,
    }
  );
  const backdropClasses = clsx(
    'bg-black bg-opacity-40 z-10 fixed h-full w-full flex items-center justify-center top-0 left-0'
  );

  const { initial, animate, exit, drag } = getMotionProps(position);

  const dragHandler = () => {
    if ((isPositionRight || isPositionBottom) && motionValue.get() > 20) {
      onClose();
    } else if (isPositionLeft && motionValue.get() < -20) {
      onClose();
    }
  };

  const setStyleFromPosition = () => {
    if (isPositionRight || isPositionLeft) {
      return {
        x: motionValue,
      };
    }

    return {
      y: motionValue,
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <section>
          <motion.div
            style={setStyleFromPosition()}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ type: 'tween' }}
            draggable={true}
            drag={drag as DraggableProps['drag']}
            onDragEnd={dragHandler}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.1}
            className={drawerClasses}
          >
            {children}
          </motion.div>

          {/*Backdrop*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => {
              onClose();
            }}
            className={backdropClasses}
          />
        </section>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
