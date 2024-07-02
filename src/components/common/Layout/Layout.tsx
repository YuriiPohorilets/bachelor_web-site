import { SmoothScrolling } from '@/components/common/SmoothScrolling/SmoothScrolling';

import { Header } from '@/modules';

interface IProps extends React.PropsWithChildren {}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <SmoothScrolling>
      <Header />
      <main>{children}</main>
    </SmoothScrolling>
  );
};
