import styles from './Subtitle.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Subtitle: React.FC<IProps> = ({ children }) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};
