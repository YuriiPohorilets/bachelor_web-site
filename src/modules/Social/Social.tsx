import { socialList } from '@/constants/social';

import styles from './Social.module.scss';

interface IProps {}

export const Social: React.FC<IProps> = ({}) => {
  return (
    <ul className={styles.list}>
      {socialList.map(item => (
        <li key={item.id}>
          <a href={item.link} target="_blank" className={styles.link}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
