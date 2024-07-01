import { AnimatePresence, motion } from 'framer-motion';

import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { AccordionContext } from './AccordionProvider';

import styles from './Accordion.module.scss';

interface IProps extends React.PropsWithChildren {
  label: string;
  isExpanded: boolean;
  onClick: () => void;
}

const AccordionModule: React.FC<IProps> = ({ children, label, isExpanded, onClick }) => {
  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
  };

  return (
    <AccordionContext.Provider value={{ isExpanded, onClick }}>
      <div className={styles.wrapper}>
        <Header label={label} />

        <AnimatePresence initial={false}>
          <motion.div
            layout
            variants={variants}
            initial="hidden"
            animate={isExpanded ? 'visible' : 'hidden'}
            exit="hidden"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </AccordionContext.Provider>
  );
};

export const Accordion = Object.assign(AccordionModule, {
  Body,
});
