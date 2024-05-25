import { navList } from '@/constants/navigation';
import { Navbar } from '@/modules';

import styles from './FooterNavbar.module.scss';

export const FooterNavbar: React.FC = () => (
  <Navbar>
    <Navbar.List direction="row" className={styles.list}>
      {navList.map(item => (
        <Navbar.Item key={item.id} item={item} className={styles.item} />
      ))}
    </Navbar.List>
  </Navbar>
);
