import { benefitsList } from '@/constants/benefits';

import styles from './Benefits.module.scss';

export const Benefits: React.FC = () => {
  return (
    <ul className={styles.list}>
      {benefitsList.map((item, index) => (
        <li key={index} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
