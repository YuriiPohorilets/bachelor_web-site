import React, { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';

import { IConfig, SliderContext } from './SliderProvider';
import { Pagination, Slide } from '@/modules/Slider/components';

import styles from './Slider.module.scss';

interface IProps extends React.PropsWithChildren {
  config: IConfig;
  fullWidth?: boolean;
  pagination?: boolean;
}

const SliderComponent: React.FC<IProps> = ({
  children,
  config,
  fullWidth = false,
  pagination = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = Array.isArray(children) ? children.length : 1;

  const handleNextSlide = () => {
    setCurrentSlide(prevState => (prevState >= length - 1 ? 0 : prevState + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prevState => (prevState <= 0 ? length - 1 : prevState - 1));
  };

  const handleChangeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const contextValues = {
    config,
    currentSlide,
    length,
    controls: {
      nextSlide: handleNextSlide,
      prevSlide: handlePrevSlide,
      changeSlide: handleChangeSlide,
    },
  };

  return (
    <SliderContext.Provider value={contextValues}>
      <AnimatePresence initial={false}>
        <div className={classNames(styles.wrapper, fullWidth ? styles.fullWidth : '')}>
          <ul className={styles.list}>
            {React.Children.map(children, (child, index) => (
              <motion.div animate={{ opacity: currentSlide === index ? 1 : 0 }} key={index}>
                {React.cloneElement(child as React.ReactElement)}
              </motion.div>
            ))}
          </ul>

          {pagination && <Pagination />}
        </div>
      </AnimatePresence>
    </SliderContext.Provider>
  );
};

export const Slider = Object.assign(SliderComponent, {
  Slide,
  Pagination,
});
