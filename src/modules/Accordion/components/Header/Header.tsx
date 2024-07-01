import { useAccordionContext } from '@/modules/Accordion/AccordionProvider';

import styles from './Header.module.scss';

interface IProps {
  label: string;
  icon?: boolean;
}

export const Header: React.FC<IProps> = ({ label, icon = true }) => {
  const { isExpanded, onClick } = useAccordionContext();

  return (
    <button type="button" aria-expanded={isExpanded} onClick={onClick} className={styles.btn}>
      <span className={styles.label}>{label}</span>
      {icon && <span className={styles.icon}></span>}
    </button>
  );
};
