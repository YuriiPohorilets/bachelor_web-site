import Link from 'next/link';

import { navList } from '@/constants/navigation';

import styles from './FooterNavbar.module.scss';

export const FooterNavbar: React.FC = () => (
  <nav>
    <ul className={styles.list}>
      {navList.map(item => (
        <li key={item.id} className={styles.item}>
          <Link href={item.link} className={styles.link}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
