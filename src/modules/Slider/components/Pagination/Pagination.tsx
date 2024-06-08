import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useSliderContext } from '@/modules/Slider/SliderProvider';

interface IProps {
  position?: string;
}

export const Pagination: React.FC<IProps> = ({ position }) => {
  const { currentSlide, config, controls } = useSliderContext();

  const arr = new Array(config.length);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            type="button"
            aria-label="pagination"
            className={classNames(styles.btn, styles.active)}
          />
        </li>
      </ul>
    </div>
  );
};
