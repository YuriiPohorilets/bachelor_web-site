import styles from './Body.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Body: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
