import styles from './Description.module.scss';

interface IProps {
  description: string;
}

export const Description: React.FC<IProps> = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};
