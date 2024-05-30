import React from 'react';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useSliderContext } from '@/modules/Slider/SliderProvider';

import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Container: React.FC<IProps> = ({ children }) => {
  const { currentSlide, config, controls } = useSliderContext();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 1, x: '100%' },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: '-100%' },
    },
  };

  useEffect(() => {
    const slideInterval = setInterval(controls.nextSlide, config.delay);

    return () => {
      clearInterval(slideInterval);
    };
  }, [controls.nextSlide, config.delay]);

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            variants={variants[config.effect]}
            initial="initial"
            animate={currentSlide === index ? 'animate' : 'exit'}
            exit="exit"
            transition={{ duration: config.duration, ease: 'easeInOut' }}
          >
            {React.cloneElement(child as React.ReactElement)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
