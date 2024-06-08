import classNames from 'classnames';
import styles from './Quote.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
  align?: 'center' | 'left' | 'right';
}

export const Quote: React.FC<IProps> = ({ children, className, align = 'center' }) => {
  return <p className={classNames(styles.text, styles[align], className)}>{children}</p>;
};
