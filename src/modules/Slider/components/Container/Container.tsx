import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useSliderContext } from '@/modules/Slider/SliderProvider';

import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Container: React.FC<IProps> = ({ children }) => {
  const { currentSlide, config, length } = useSliderContext();

  const variants = {
    fade: {
      enter: { opacity: 0 },
      center: { opacity: 1 },
      exit: { opacity: 0 },
    },

    slide: {
      enter: { x: '100%', opacity: 0 },
      exit: { x: '-100%', opacity: 0 },
      center: { x: 0, opacity: 1 },
    },
  };

  const getVariant = (index: number) => {
    if (index === currentSlide) {
      return 'center';
    } else if (index === (currentSlide - 1 + length) % length) {
      return 'exit';
    } else if (index === (currentSlide + 1) % length) {
      return 'enter';
    }

    return 'exit';
  };

  return (
    <div className={styles.wrapper}>
      <AnimatePresence initial={false} custom={config.direction}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            variants={variants[config.effect]}
            custom={config.direction}
            initial="enter"
            exit="exit"
            animate={getVariant(index)}
            transition={{
              duration: config.duration / 100,
              delay: config.effect === 'fade' ? 0.05 : 0,
            }}
            key={index}
            className={styles.item}
          >
            {React.cloneElement(child as React.ReactElement)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
