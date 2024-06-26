import Link from 'next/link';

import { headerNavList } from '@/constants/navigation';
import { DropdownButton } from '@/components/misc';

import styles from './Navbar.module.scss';

interface IProps {}

export const Navbar: React.FC<IProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {headerNavList.map(item => (
          <li key={item.id} className={styles.item}>
            {item.dropdown ? (
              <DropdownButton label={item.label}>
                <ul className={styles.sublist}>
                  {item.dropdown.map(subitem => (
                    <li key={subitem.id}>
                      <Link href={subitem.link!} className={styles.sublink}>
                        {subitem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DropdownButton>
            ) : (
              <Link href={item.link!} className={styles.link}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
