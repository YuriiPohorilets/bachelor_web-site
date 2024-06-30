import { scrollToTop } from '@/helpers/scrollToTop';

import styles from './ToTopButton.module.scss';

export const ToTopButton: React.FC = () => {
  return (
    <button type="button" onClick={scrollToTop} className={styles.btn}>
      Back to top
    </button>
  );
};
