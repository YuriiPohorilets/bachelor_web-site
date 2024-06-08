import classNames from 'classnames';
import styles from './Paragraph.module.scss';

interface IProps extends React.PropsWithChildren {
  initialLetter?: boolean;
}

export const Paragraph: React.FC<IProps> = ({ children, initialLetter = true }) => {
  const cx = classNames(styles.text, initialLetter && styles.initialLetter);

  return <p className={cx}>{children}</p>;
};
