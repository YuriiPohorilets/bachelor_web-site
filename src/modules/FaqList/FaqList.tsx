import { useState } from 'react';

import { Accordion } from '@/components/ui';

import styles from './FaqList.module.scss';

interface IProps {
  list: {
    id: string;
    title: string;
    description: string;
  }[];
}

export const FaqList: React.FC<IProps> = ({ list }) => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);

  const handleFaqClick = (index: string) => {
    const faqIndex = selectedFaq === index ? null : index;

    setSelectedFaq(faqIndex);
  };

  return (
    <ul className={styles.list}>
      {list.map(item => (
        <li key={item.id}>
          <Accordion
            index={item.id}
            content={{ label: item.title, text: item.description }}
            isOpen={selectedFaq === item.id}
            onClick={handleFaqClick}
          />
        </li>
      ))}
    </ul>
  );
};
