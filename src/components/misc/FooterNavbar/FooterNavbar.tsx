import Link from 'next/link';

import { navList } from '@/constants/navigation';

import styles from './FooterNavbar.module.scss';

export const FooterNavbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navList.map(item => (
          <li key={item.id}>
            <Link href={item.link} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
