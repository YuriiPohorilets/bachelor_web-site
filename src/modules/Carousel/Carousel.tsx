import React, { useState } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { ArrowNavigationIcon } from '@/assets/icons';

import styles from './Carousel.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Carousel: React.FC<IProps> = ({ children }) => {
  const [position, setPosition] = useState(0);

  const step = 400;
  const items = Array.isArray(children) ? children.length - 1 : 1;
  const minPosition = 0;
  const maxPosition = items * step * -1;

  const handlePrevSlide = () => {
    if (position >= minPosition) return;

    setPosition(prevState => Math.min(prevState + step, minPosition));
  };

  const handleNextSlide = () => {
    if (position <= maxPosition) return;

    setPosition(prevState => Math.max(prevState - step, maxPosition));
  };

  const handleDragEnd = (e, info: PanInfo) => {
    const offset = info.offset.x;

    if (offset > 50) {
      handlePrevSlide();
    } else if (offset < -50) {
      handleNextSlide();
    }
  };

  const variants = {
    prev: { label: 'Previous slide', onClick: handlePrevSlide },
    next: { label: 'Next slide', onClick: handleNextSlide },
  };

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        <motion.ul
          animate={{ x: position }}
          drag="x"
          onDragEnd={handleDragEnd}
          dragConstraints={{ left: maxPosition, right: minPosition }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className={styles.list}
        >
          {React.Children.map(children, (child, index) => (
            <li key={index} className={styles.item}>
              {React.cloneElement(child as React.ReactElement)}
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <div className={styles.controlsWrapper}>
        <button
          type="button"
          data-direction="prev"
          aria-label={variants.prev.label}
          onClick={variants.prev.onClick}
          disabled={position >= minPosition}
          className={styles.btn}
        >
          <ArrowNavigationIcon />
        </button>

        <button
          type="button"
          data-direction="next"
          aria-label={variants.next.label}
          onClick={variants.next.onClick}
          disabled={position <= maxPosition}
          className={styles.btn}
        >
          <ArrowNavigationIcon />
        </button>
      </div>
    </div>
  );
};
