import { useState } from 'react';

import { Accordion } from '@/modules';

import styles from './FaqList.module.scss';

interface IProps {
  list: { label: string; description: string }[];
}

export const FaqList: React.FC<IProps> = ({ list }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setExpandedId(prevState => (prevState === id ? null : id));
  };

  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li key={index}>
          <Accordion
            label={item.label}
            isExpanded={expandedId === index}
            onClick={() => handleClick(index)}
          >
            <Accordion.Body>
              <p className={styles.description}>{item.description}</p>
            </Accordion.Body>
          </Accordion>
        </li>
      ))}
    </ul>
  );
};
