import classNames from 'classnames';

import styles from './Label.module.scss';

interface IProps {
  label: string;
  className?: string;
}

export const Label: React.FC<IProps> = ({ label, className }) => {
  return <span className={classNames(styles.label, className)}>{label}</span>;
};
