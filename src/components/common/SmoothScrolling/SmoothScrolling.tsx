import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { ReactLenis, useLenis } from '@/libs/lenis';

interface IProps extends React.PropsWithChildren {}

export const SmoothScrolling: React.FC<IProps> = ({ children }) => {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      if (lenis.isScrolling) lenis.stop();

      window.scrollTo({ top: 0, behavior: 'instant' });

      lenis.start();
    }
  }, [lenis, pathname]);

  return (
    <ReactLenis root options={{ duration: 2, lerp: 0 }}>
      {children}
    </ReactLenis>
  );
};
