import { Container, Section } from '@/components/common';
import { Accordion } from '@/modules';

import styles from './index.module.scss';
import { FaqList } from '@/components/misc/FaqList/FaqList';

const content = {
  title: 'FAQ',
  faq: [
    {
      label: 'How do I get started?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'Can I make special meal requests?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'Do I have to purchase all four meals?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'What if I need to cancel my order?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'What if I am running late or miss a delivery?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'What if I find an issue with my meal?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      label: 'Can I get meals delivered on “off days”?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
  ],
};

export const Faq: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <FaqList list={content.faq} />
        </div>
      </Container>
    </Section>
  );
};
