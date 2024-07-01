import { Container, Section } from '@/components/common';
import { Quote } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Advantage',
  description:
    'Our charming bunny bells, tastefully dressed to complement your event’s theme, ensure a high-class service that will impress your guests',
};

export const Advantage: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Quote className={styles.quote}>{content.description}</Quote>
          </div>
        </div>
      </Container>
    </Section>
  );
};
