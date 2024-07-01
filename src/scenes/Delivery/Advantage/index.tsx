import { Container, Section } from '@/components/common';
import { Quote } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Advantage',
  description:
    'Include in culinary excellence with bunny belles: your experience, enhanced by signature cocktails',
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
