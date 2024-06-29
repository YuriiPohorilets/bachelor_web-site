import { ReactLenis } from '@/libs/lenis';

import { Header } from '@/modules';

interface IProps extends React.PropsWithChildren {}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ duration: 2, lerp: 0 }}>
      <Header />
      <main>{children}</main>
    </ReactLenis>
  );
};
