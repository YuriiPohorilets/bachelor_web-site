import classNames from 'classnames';

import styles from './Description.module.scss';

interface IProps {
  description: string;
  className?: string;
}

export const Description: React.FC<IProps> = ({ description, className }) => {
  return <p className={classNames(styles.description, className)}>{description}</p>;
};
