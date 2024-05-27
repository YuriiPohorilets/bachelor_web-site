import { motion } from 'framer-motion';

import { useSliderContext } from '@/modules/Slider/SliderProvider';

import styles from './Slide.module.scss';

interface IProps extends React.PropsWithChildren {}

export const Slide: React.FC<IProps> = ({ children }) => {
  const {
    config: { duration, effect },
  } = useSliderContext();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 1, x: '100%' },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 1, x: '-100%' },
    },
  };

  return (
    <motion.div
      variants={variants[effect]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, ease: 'easeInOut' }}
      className={styles.slide}
    >
      {children}
    </motion.div>
  );
};
