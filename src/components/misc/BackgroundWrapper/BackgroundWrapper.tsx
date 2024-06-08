import styles from './BackgroundWrapper.module.scss';

interface IProps extends React.PropsWithChildren {
  bgUrl: string;
}

export const BackgroundWrapper: React.FC<IProps> = ({ children, bgUrl }) => {
  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${bgUrl})` }}>
      {children}
    </div>
  );
};
