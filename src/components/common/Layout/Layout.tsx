import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { ReactLenis } from '@/libs/lenis';

import { PagePathname } from '@/types';
import { Header } from '@/modules';
import { PageTransition } from '@/components/misc';

interface IProps extends React.PropsWithChildren {}

export const Layout: React.FC<IProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ReactLenis root options={{ duration: 2, lerp: 0 }}>
      {pathname !== PagePathname.ContactUs && <Header />}
      <main>
        <PageTransition key={router.route}>{children}</PageTransition>
      </main>
    </ReactLenis>
  );
};
