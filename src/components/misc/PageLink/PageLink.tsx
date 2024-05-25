import Link from 'next/link';

import { PagePathname } from '@/types';
import { navList } from '@/constants/navigation';

import styles from './PageLink.module.scss';
import { OutwardArrowIcon } from '@/assets/icons';

interface IProps {
  href: PagePathname;
}

export const PageLink: React.FC<IProps> = ({ href }) => {
  const label = navList.filter(item => item.link === href)[0].label;

  return (
    <Link href={href} className={styles.link}>
      <span>More</span>

      <span className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
        <span className={styles.icon}>
          <OutwardArrowIcon />
        </span>
      </span>
    </Link>
  );
};
