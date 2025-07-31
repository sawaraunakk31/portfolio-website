export const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.75) => {
  return {
    initial: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};