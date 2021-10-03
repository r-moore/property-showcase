export const variants = {
  initial: {
    x: '100vw',
  },
  in: {
    x: 0,
  },
  out: {
    x: '-100vw',
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};
