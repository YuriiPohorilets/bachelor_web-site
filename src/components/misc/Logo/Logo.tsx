import { LogoIcon } from '@/assets/icons';

import styles from './Logo.module.scss';

interface IProps {}

export const Logo: React.FC<IProps> = () => {
  return (
    <div className={styles.wrapper}>
      <LogoIcon />
    </div>
  );
};
