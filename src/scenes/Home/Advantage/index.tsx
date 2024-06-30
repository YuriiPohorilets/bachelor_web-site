import { Container, Section } from '@/components/common';
import { Quote } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Advantage',
  description:
    'Bachelor bunny gourmet delivers convenient and luxurious home-style meals to your doorstep',
};

export const Advantage: React.FC = () => {
  return (
    <Section>
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
