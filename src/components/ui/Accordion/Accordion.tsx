import { motion } from 'framer-motion';

import styles from './Accordion.module.scss';

interface IProps {
  content: {
    label: string;
    text: string;
  };
  isOpen: boolean;
  index: string;
  onClick: (index: string) => void;
}

export const Accordion: React.FC<IProps> = ({ content, isOpen, index, onClick }) => {
  const variants = {
    open: { maxHeight: 500, paddingBottom: 24 },
    close: { maxHeight: 0, paddingBottom: 0 },
  };

  return (
    <motion.div key={index} layout className={styles.wrapper}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onClick(index)}
        className={styles.btn}
      >
        <span className={styles.title}>{content.label}</span>

        <div className={styles.icon} />
      </button>

      <motion.p
        layout
        variants={variants}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        transition={isOpen ? { duration: 0.6, ease: 'easeInOut' } : { duration: 0.3 }}
        className={styles.description}
      >
        {content.text}
      </motion.p>
    </motion.div>
  );
};
