import { Container, Section } from '@/components/common';
import { Quote } from '@/components/ui';

import styles from './Advantage.module.scss';

const content = {
  quote:
    'Bachelor bunny gourmet delivers convenient and luzzurious home-style meals to your doorstep',
};

export const Advantage: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">Advantage</h2>

          <Quote className={styles.quote}>{content.quote}</Quote>
        </div>
      </Container>
    </Section>
  );
};
