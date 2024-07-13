import { socialList } from '@/constants/social';

import styles from './Social.module.scss';

interface IProps {
  variant?: 'text' | 'icon';
}

export const Social: React.FC<IProps> = ({ variant = 'text' }) => {
  return (
    <ul className={styles.list}>
      {socialList.map(item => (
        <li key={item.id}>
          <a href={item.link} aria-label={item.label} target="_blank" className={styles.link}>
            {variant === 'text' ? item.label : item.icon()}
          </a>
        </li>
      ))}
    </ul>
  );
};
