import { Container } from '@/components/common';
import { Logo } from '@/components/misc';
import { Navbar } from '@/modules';
import { headerNavList } from '@/constants/navigation';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />

          <Navbar>
            <Navbar.List>
              {headerNavList.map(item => {
                if (item.dropdown) return;

                return <Navbar.Item key={item.id} item={item} className={styles.navItem} />;
              })}
            </Navbar.List>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};
