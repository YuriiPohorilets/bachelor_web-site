import { addressList } from '@/constants/address';

import styles from './Address.module.scss';

export const Address: React.FC = () => {
  const renderList = () => (
    <ul className={styles.list}>
      {addressList.map(({ id, label, link }) => (
        <li key={id}>
          <a href={link} target="_blank" className={styles.link}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return renderList();
};
