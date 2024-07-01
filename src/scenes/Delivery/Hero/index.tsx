import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';
import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'In-Home Executive\n Delivery',
  label: 'The first meal is free',
  description:
    'An elevated dining experience brings luxury dining directly to your door, where an attractive Bunny Belle systematically engages in light conversation as she plates your pre-cooked dinner meal, and \npours a meal-paired cocktail. She then leaves the client to enjoy their meal and heads to the next delivery location. (The entire process will take 12-15 minutes per client)',
};

export const Hero: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{content.title}</h1>
            <span className={styles.label}>{content.label}</span>
          </div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>

            <Button as="a" href={PagePathname.ContactUs} target="_self">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
