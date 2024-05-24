import { navList } from '@/constants/navigation';
import { Navbar } from '@/modules';

export const FooterNavbar: React.FC = () => (
  <Navbar>
    <Navbar.List>
      {navList.map(item => (
        <Navbar.Item key={item.id} item={item} />
      ))}
    </Navbar.List>
  </Navbar>
);
