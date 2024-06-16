import { usePathname } from 'next/navigation';
import { ReactLenis } from '@/libs/lenis';

import { PagePathname } from '@/types';
import { Header } from '@/modules';

interface IProps extends React.PropsWithChildren {}

export const Layout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <ReactLenis root options={{ duration: 2, lerp: 0 }}>
      {pathname !== PagePathname.ContactUs && <Header />}
      <main>{children}</main>
    </ReactLenis>
  );
};
