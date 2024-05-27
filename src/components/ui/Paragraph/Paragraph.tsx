import styles from './Paragraph.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Paragraph: React.FC<IProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
