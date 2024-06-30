import classNames from 'classnames';

import styles from './Section.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

export const Section: React.FC<IProps> = ({ children, className }) => {
  return <section className={classNames(styles.section, className)}>{children}</section>;
};
