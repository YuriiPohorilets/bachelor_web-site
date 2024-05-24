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
                if (item.dropdown) {
                  return (
                    <Navbar.Dropdown key={item.id}>
                      <Navbar.List>
                        {item.dropdown.map(subitem => (
                          <Navbar.Item key={subitem.id} item={subitem} />
                        ))}
                      </Navbar.List>
                    </Navbar.Dropdown>
                  );
                }

                return <Navbar.Item key={item.id} item={item} />;
              })}
              <Navbar.Dropdown>
                <Navbar.List></Navbar.List>
              </Navbar.Dropdown>
            </Navbar.List>
          </Navbar>
        </div>
      </Container>
    </header>
  );
};
