import classNames from 'classnames';

import styles from './Slide.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

export const Slide: React.FC<IProps> = ({ children, className }) => {
  return <div className={classNames(styles.slide, className)}>{children}</div>;
};
