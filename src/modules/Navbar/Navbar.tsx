import { List, Item, Dropdown } from '@/modules/Navbar/components';

import styles from './Navbar.module.scss';

interface IProps extends React.PropsWithChildren {}

const NavbarComponent: React.FC<IProps> = ({ children }) => {
  return <nav className={styles.nav}>{children}</nav>;
};

export const Navbar = Object.assign(NavbarComponent, {
  List,
  Item,
  Dropdown,
});
