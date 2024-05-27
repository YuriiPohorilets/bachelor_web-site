import classNames from 'classnames';
import styles from './Pagination.module.scss';

type PorisionType = {
  top: 'top';
  bottom: 'bottom';
  right: 'right';
  left: 'left';
  center: 'center';
};

interface IProps {
  position?: [PorisionType, PorisionType];
}

export const Pagination: React.FC<IProps> = ({ position }) => {
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
