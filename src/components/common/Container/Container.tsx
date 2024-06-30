import classNames from 'classnames';

import styles from './Container.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<IProps> = ({ children, className }) => {
  return <div className={classNames(styles.container, className)}>{children}</div>;
};
