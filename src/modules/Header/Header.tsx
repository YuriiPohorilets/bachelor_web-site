import { Container } from '@/components/common';
import { Navbar } from '@/modules/Navbar/Navbar';

import styles from './Header.module.scss';
import { Logo } from '@/components/misc';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.wrapoer}>
          <div className={styles.iconWrapper}>
            <Logo />
          </div>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
