import Link from 'next/link';

import { LogoIcon } from '@/assets/icons';

import styles from './Logo.module.scss';

interface IProps {}

export const Logo: React.FC<IProps> = () => {
  return (
    <Link href="/" className={styles.link}>
      <LogoIcon />
    </Link>
  );
};
