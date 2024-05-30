import Link from 'next/link';

import { LogoIcon } from '@/assets/icons';

import styles from './Logo.module.scss';

interface IProps {}

export const Logo: React.FC<IProps> = () => {
  return (
    <Link href="/" aria-label="Logo Bachelor Bunny Gourmet" className={styles.link}>
      <LogoIcon />
    </Link>
  );
};
