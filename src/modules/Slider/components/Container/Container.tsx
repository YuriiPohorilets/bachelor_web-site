import React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { useSliderContext } from '@/modules/Slider/SliderProvider';

import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Container: React.FC<IProps> = ({ children }) => {
  const { currentSlide, config, controls } = useSliderContext();

  useEffect(() => {
    const slideInterval = setInterval(controls.nextSlide, config.delay);

    return () => {
      clearInterval(slideInterval);
    };
  }, [controls.nextSlide, config.delay]);

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false}>
        {React.Children.map(children, (child, index) => {
          return index === currentSlide && React.cloneElement(child as React.ReactElement);
        })}
      </AnimatePresence>
    </div>
  );
};
