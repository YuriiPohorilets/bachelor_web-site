import { Address, Social } from '@/modules';
import { Container } from '@/components/common';
import { ContactUsButton, Copyright, FooterNavbar } from '@/components/misc';
import { CrownIcon } from '@/assets/icons';

import styles from './Footer.module.scss';

const content = {
  title: ['Bachelor bunny', 'gourmet'],
};

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
          <div className={styles.innerWrapper}>
            <div className={styles.contentWrapper}>
              <div className={styles.logoWrapper}>
                <div className={styles.iconWrapper}>
                  <CrownIcon />
                </div>

                <span className={styles.logo}>
                  {content.title[0]} <span>{content.title[1]}</span>
                </span>
              </div>

              <ContactUsButton variant="outlined" />
            </div>

            <ul className={styles.navList}>
              {navItems.map(({ id, label, component }) => (
                <li key={id} className={styles.navItem}>
                  <span className={styles.navLabel}>{label}</span>

                  {component}
                </li>
              ))}
            </ul>
          </div>

          <Copyright />
        </div>
      </Container>
    </footer>
  );
};
