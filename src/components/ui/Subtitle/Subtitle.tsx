import styles from './Subtitle.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Subtitle: React.FC<IProps> = ({ children }) => {
  return <span className={styles.subtitle}>{children}</span>;
};
