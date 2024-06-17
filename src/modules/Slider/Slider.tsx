import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { IConfig, SliderContext } from './SliderProvider';
import { Pagination, Slide, NavigationButton, Container } from '@/modules/Slider/components';

import styles from './Slider.module.scss';

interface IProps extends React.PropsWithChildren {
  config: IConfig;
  fullWidth?: boolean;
  pagination?: boolean;
  className?: string;
  length: number;
}

const SliderComponent: React.FC<IProps> = ({
  children,
  config,
  fullWidth = false,
  pagination = false,
  className,
  length,
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const resetInterval = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (config.autoplay) {
      timerRef.current = setInterval(() => {
        setCurrentSlide(prevState => (prevState >= length - 1 ? 0 : prevState + 1));
        setDirection(1);
      }, config.delay);
    }
  }, [config.autoplay, config.delay, length]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prevState => (prevState >= length - 1 ? 0 : prevState + 1));
    setDirection(1);
    resetInterval();
  }, [length, resetInterval]);

  const handlePrevSlide = () => {
    setCurrentSlide(prevState => (prevState <= 0 ? length - 1 : prevState - 1));
    setDirection(-1);
    resetInterval();
  };

  const handleChangeSlide = (index: number) => {
    const newDirection = index > currentSlide ? 1 : -1;

    setCurrentSlide(index);
    setDirection(newDirection);

    resetInterval();
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetInterval]);

  const contextValues = {
    config: { ...config, direction },
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
      <div className={classNames(styles.wrapper, className, fullWidth ? styles.fullWidth : '')}>
        {children}
        {pagination && <Pagination />}
      </div>
    </SliderContext.Provider>
  );
};

export const Slider = Object.assign(SliderComponent, {
  Slide,
  Container,
  Pagination,
  NavigationButton,
});
