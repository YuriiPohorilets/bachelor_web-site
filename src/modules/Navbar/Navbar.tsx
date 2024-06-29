import { INavItem, navList } from '@/constants/navigation';
import { Dropdown } from './components/Dropdown/Dropdown';
import { LinkItem } from './components/LinkItem/LinkItem';

import styles from './Navbar.module.scss';
import linkStyle from './components/LinkItem/LinkItem.module.scss';

const groupedNavItems = navList.reduce((acc, item) => {
  if (item.submenu) {
    if (!acc[item.submenu]) {
      acc[item.submenu] = [];
    }
    (acc[item.submenu] as INavItem[]).push(item);
  } else {
    acc[item.id] = item;
  }
  return acc;
}, {} as Record<string, INavItem[] | INavItem>);

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {Object.entries(groupedNavItems).map(([key, item]) => {
          if (Array.isArray(item)) {
            return (
              <li key={key} className={styles.item}>
                <Dropdown key={key} label={key} className={linkStyle.link}>
                  <ul className={styles.sublist}>
                    {item.map(subItem => (
                      <li key={subItem.id} className={styles.item}>
                        <LinkItem
                          label={subItem.label}
                          href={subItem.link}
                          className={styles.sublink}
                        />
                      </li>
                    ))}
                  </ul>
                </Dropdown>
              </li>
            );
          } else {
            return (
              <li key={item.id} className={styles.item}>
                <LinkItem label={item.label} href={item.link} />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};
