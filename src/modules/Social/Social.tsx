import { socialList } from '@/constants/social';

import styles from './Social.module.scss';

export const Social: React.FC = () => {
  const renderList = () => (
    <ul className={styles.list}>
      {socialList.map(({ id, link, label }) => (
        <li key={id} className={styles.item}>
          <a href={link} target="_blank" className={styles.link}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return renderList();
};
