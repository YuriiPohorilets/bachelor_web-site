import classNames from 'classnames';

import styles from './List.module.scss';

interface IProps extends React.PropsWithChildren {
  direction?: 'row' | 'column';
  className?: string;
}

export const List: React.FC<IProps> = ({ children, direction = 'row', className }) => {
  return <ul className={classNames(styles.list, styles[direction], className)}> {children}</ul>;
};
