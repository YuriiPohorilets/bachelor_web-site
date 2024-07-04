import classNames from 'classnames';
import { motion } from 'framer-motion';

import { animation, IAnimationOptions } from '@/helpers/framer-motion';

interface IProps extends React.PropsWithChildren {
  className?: string;
  effect: 'fadeIn' | 'zoomIn';
  transition: IAnimationOptions;
}

export const AnimationWrapper: React.FC<IProps> = ({ children, className, effect, transition }) => {
  return (
    <motion.div {...animation[effect](transition)} className={classNames(className)}>
      {children}
    </motion.div>
  );
};
