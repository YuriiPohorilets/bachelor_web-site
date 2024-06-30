import { Container } from '@/components/common';
import { Copyright, FooterNavbar, Logo, ToTopButton } from '@/components/misc';
import { PageLink } from '@/components/ui';
import { Address, Social } from '@/modules';
import { PagePathname } from '@/types';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const footerNavList = [
    { label: 'Navigation', component: <FooterNavbar /> },
    { label: 'Business enquiries', component: <Address /> },
    { label: 'Follow us', component: <Social /> },
  ];

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.contentWrapper}>
              <div className={styles.logoWrapper}>
                <div className={styles.iconWrapper}>
                  <Logo />
                </div>

                <span className={styles.title}>
                  <span>Bachelor Bunny</span>
                  <span>Gourmet</span>
                </span>
              </div>

              <PageLink page={PagePathname.ContactUs} className={styles.link} />
            </div>

            <div className={styles.navWrapper}>
              <ul className={styles.navList}>
                {footerNavList.map((item, index) => (
                  <li key={index} className={styles.navItem}>
                    <span className={styles.navLabel}>{item.label}</span>
                    {item.component}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.copyrightWrapper}>
            <Copyright />
            <ToTopButton />
          </div>
        </div>
      </Container>
    </footer>
  );
};
