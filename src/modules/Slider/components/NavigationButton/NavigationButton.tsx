import classNames from 'classnames';

import { useSliderContext } from '@/modules/Slider/SliderProvider';
import { ArrowNavigationIcon } from '@/assets/icons';

import styles from './NavigationButton.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'prev' | 'next';
}

export const NavigationButton: React.FC<IProps> = ({ direction }) => {
  const { controls } = useSliderContext();

  const variants = {
    prev: { label: 'Previous slide', onClick: controls.prevSlide },
    next: { label: 'Next slide', onClick: controls.nextSlide },
  };

  return (
    <button
      type="button"
      aria-label={variants[direction].label}
      onClick={variants[direction].onClick}
      className={classNames(styles.btn, styles[direction])}
    >
      <ArrowNavigationIcon />
    </button>
  );
};
