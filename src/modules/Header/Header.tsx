import { Container } from '@/components/common';
import { Logo } from '@/components/misc';
import { Navbar } from '@/modules';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />

          <Navbar />
        </div>
      </Container>
    </header>
  );
};
