import classNames from 'classnames';
import styles from './Section.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
  shadow?: 'top' | 'bottom' | 'both';
}

export const Section: React.FC<IProps> = ({ children, className, shadow }) => {
  const cx = classNames(styles.section, className, shadow && (styles.shadow, styles[shadow]));

  return <section className={cx}>{children}</section>;
};
