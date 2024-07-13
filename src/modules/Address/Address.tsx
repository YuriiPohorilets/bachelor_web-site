import classNames from 'classnames';
import { addressList } from '@/constants/address';

import styles from './Address.module.scss';

interface IProps {
  icon?: boolean;
  direction?: 'row' | 'column';
}

export const Address: React.FC<IProps> = ({ icon = false, direction = 'column' }) => {
  return (
    <address>
      <ul className={classNames(styles.list, styles[direction])}>
        {addressList.map(item => (
          <li key={item.id} className={styles.item}>
            <a href={item.link} className={styles.link}>
              {icon && <span className={styles.icon}>{item.icon()}</span>}
              <span className={styles.label}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};
