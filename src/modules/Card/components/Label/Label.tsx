import styles from './Label.module.scss';

interface IProps {
  label: string;
}

export const Label: React.FC<IProps> = ({ label }) => {
  return <span className={styles.label}>{label}</span>;
};
