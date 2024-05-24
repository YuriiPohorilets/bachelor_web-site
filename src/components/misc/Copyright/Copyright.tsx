import { scrollToTop } from '@/helpers/scrollToTop';

import styles from './Copyright.module.scss';

export const Copyright: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <div className={styles.copyWrapper}>
      <span className={styles.copyright}>&copy;{date} Bachelor bunny</span>

      <button onClick={scrollToTop}>BACK TO TOP</button>
    </div>
  );
};
