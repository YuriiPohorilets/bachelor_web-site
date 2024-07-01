import { Container, Section } from '@/components/common';
import { Quote } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Advantage',
  description:
    'Our mission is to provide you with impeccable service and convenience by learning your favorite foods, cocktails, and snacks...',
};

export const Advantage: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <Quote align="center" className={styles.description}>
            {content.description}
          </Quote>
        </div>
      </Container>
    </Section>
  );
};
