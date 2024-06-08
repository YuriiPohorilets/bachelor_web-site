import { usePathname } from 'next/navigation';

import { PagePathname } from '@/types';
import { Header } from '@/modules';

interface IProps extends React.PropsWithChildren {}

export const Layout: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== PagePathname.ContactUs && <Header />}
      <main>{children}</main>
    </>
  );
};
