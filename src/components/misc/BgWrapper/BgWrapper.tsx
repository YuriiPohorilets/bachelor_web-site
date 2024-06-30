import classNames from 'classnames';

import styles from './BgWrapper.module.scss';

interface IProps extends React.PropsWithChildren {
  imageUrl: string;
  className?: string;
}

export const BgWrapper: React.FC<IProps> = ({ children, className, imageUrl }) => {
  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};
