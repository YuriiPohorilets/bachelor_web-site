import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

import { SliderContext } from './SliderProvider';
import { Container, Pagination, Slide } from '@/modules/Slider/components';

import styles from './Slider.module.scss';

interface IProps extends React.PropsWithChildren {
  delay: number;
  duration: number;
  effect?: 'fade' | 'slide';
  fullWidth?: boolean;
}

const SliderComponent: React.FC<IProps> = ({
  children,
  delay,
  duration,
  effect = 'fade',
  fullWidth = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const l = 2;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % l);
  }, [l]);

  const prevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + l) % l);
  };

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const contextValues = {
    currentSlide,
    config: { delay, duration, effect },
    controls: { nextSlide, prevSlide, changeSlide },
  };

  return (
    <SliderContext.Provider value={contextValues}>
      <AnimatePresence initial={false}>
        <div className={classNames(styles.wrapper, fullWidth ? styles.fullWidth : '')}>
          {children}
        </div>
      </AnimatePresence>
    </SliderContext.Provider>
  );
};

export const Slider = Object.assign(SliderComponent, {
  Container,
  Slide,
  Pagination,
});
