import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { DropdownIcon } from '@/assets/icons';

import styles from './Dropdown.module.scss';

interface IProps extends React.PropsWithChildren {
  label: string;
  className?: string;
}

export const Dropdown: React.FC<IProps> = ({ children, label, className }) => {
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBtnClick = () => setIsExpanded(prevState => !prevState);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
    visible: { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
  };

  return (
    <>
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={handleBtnClick}
        className={classNames(styles.btn, className)}
        ref={dropdownRef}
      >
        <span>{label}</span>
        <span className={styles.icon}>
          <DropdownIcon />
        </span>
      </button>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={isExpanded ? 'visible' : 'hidden'}
        transition={{ duration: 0.4, easings: 'easeInOut' }}
        className={styles.wrapper}
      >
        {children}
      </motion.div>
    </>
  );
};
