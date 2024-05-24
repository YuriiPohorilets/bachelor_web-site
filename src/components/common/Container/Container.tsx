import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Container: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
