import Link from 'next/link';
import classNames from 'classnames';

import { PagePathname } from '@/types';
import { navList } from '@/constants/navigation';
import { OutwardArrowIcon } from '@/assets/icons';

import styles from './PageLink.module.scss';

interface IProps {
  page: PagePathname;
  className?: string;
  badge?: boolean;
}

export const PageLink: React.FC<IProps> = ({ page, className, badge = false }) => {
  const label = navList.find(item => item.link === page)?.label ?? 'Default Label';

  return (
    <Link href={page} className={styles.link}>
      {badge && <span className={styles.badge}>More</span>}

      <span className={styles.labelWrapper}>
        <span className={classNames(styles.label, className)}>{label}</span>

        <span className={styles.icon}>
          <OutwardArrowIcon />
        </span>
      </span>
    </Link>
  );
};
