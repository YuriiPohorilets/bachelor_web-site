import classNames from 'classnames';
import styles from './Paragraph.module.scss';

interface IProps extends React.PropsWithChildren {
  initialLetter?: boolean;
  className?: string;
}

export const Paragraph: React.FC<IProps> = ({ children, initialLetter = true, className }) => {
  const cx = classNames(styles.text, className, initialLetter && styles.initialLetter);

  return <p className={cx}>{children}</p>;
};
