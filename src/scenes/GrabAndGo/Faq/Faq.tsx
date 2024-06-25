import { useState } from 'react';

import { Container, Section } from '@/components/common';
import { Accordion } from '@/components/ui';

import styles from './Faq.module.scss';
import { LayoutGroup } from 'framer-motion';
import { FaqList } from '@/modules/FaqList/FaqList';

const content = {
  faq: [
    {
      id: 'faq-01',
      title: 'How do I get started?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-02',
      title: 'Can I make special meal requests?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-03',
      title: 'Do I have to purchase all four meals?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-04',
      title: 'What if I need to cancel my order?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-05',
      title: 'What if I am running late or miss a delivery?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-06',
      title: 'What if I find an issue with my meal?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
    {
      id: 'faq-07',
      title: 'Can I get meals delivered on "off days"?',
      description:
        'Simple! Just call or place an order. When ordering, you will fill out the form/questions for us, so we will better understand what to offer you and we will contact you within 12-24 hours.',
    },
  ],
};

export const Faq: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>FAQ</h2>

          <FaqList list={content.faq} />
        </div>
      </Container>
    </Section>
  );
};
