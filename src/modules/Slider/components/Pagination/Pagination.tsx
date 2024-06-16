import classNames from 'classnames';
import { useSliderContext } from '@/modules/Slider/SliderProvider';

import styles from './Pagination.module.scss';

interface IProps {
  position?: ['top', 'left'];
}

export const Pagination: React.FC<IProps> = ({}) => {
  const { controls, length, currentSlide } = useSliderContext();
  const items = new Array(length).fill('');

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map((_, index) => (
          <li key={index} className={styles.item}>
            <button
              type="button"
              aria-label="pagination"
              onClick={() => controls.changeSlide(index)}
              className={classNames(styles.btn, index === currentSlide ? styles.active : '')}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
