import { addressList } from '@/constants/address';

import styles from './Address.module.scss';

interface IProps {}

export const Address: React.FC<IProps> = ({}) => {
  return (
    <address>
      <ul className={styles.list}>
        {addressList.map(item => (
          <li key={item.id} className={styles.item}>
            <a href={item.link} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};
