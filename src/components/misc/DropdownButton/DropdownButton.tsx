import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { DropdownIcon } from '@/assets/icons';

import styles from './DropdownButton.module.scss';

interface IProps extends React.PropsWithChildren {
  label: string;
}

export const DropdownButton: React.FC<IProps> = ({ children, label }) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(prevState => !prevState);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={handleClick}
        className={styles.btn}
        ref={dropdownRef}
      >
        <span className={styles.label}>{label}</span>

        <span className={styles.icon}>
          <DropdownIcon />
        </span>
      </button>

      <motion.div
        initial={{
          opacity: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        }}
        animate={
          isExpanded
            ? { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
            : { opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }
        }
        transition={{ duration: 0.6, easings: 'easeInOut' }}
        className={styles.contentWrapper}
      >
        {children}
      </motion.div>
    </div>
  );
};
