import { motion } from 'framer-motion';

import styles from './Slide.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Slide: React.FC<IProps> = ({ children }) => {
  return <div className={styles.slide}>{children}</div>;
};
