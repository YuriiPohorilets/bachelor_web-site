import { Address, Social } from '@/modules';
import { Container } from '@/components/common';
import { Copyright, FooterNavbar } from '@/components/misc';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const navItems = [
    { id: 'footer-item-0', label: 'Navigation', component: <FooterNavbar /> },
    { id: 'footer-item-1', label: 'Business enquiries', component: <Address /> },
    { id: 'footer-item-2', label: 'Follow us', component: <Social /> },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <div>LOGO</div>
            <div>CONTACTS US BUTTON</div>
          </div>

          <ul className={styles.navList}>
            {navItems.map(({ id, label, component }) => (
              <li key={id} className={styles.navItem}>
                <span className={styles.navLabel}>{label}</span>

                {component}
              </li>
            ))}
          </ul>

          <Copyright />
        </div>
      </Container>
    </footer>
  );
};
