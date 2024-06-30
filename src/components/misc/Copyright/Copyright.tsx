import styles from './Copyright.module.scss';

export const Copyright: React.FC = () => {
  const date = new Date().getFullYear();

  return <span className={styles.copyright}>&copy;{date} Bachelor bunny</span>;
};
