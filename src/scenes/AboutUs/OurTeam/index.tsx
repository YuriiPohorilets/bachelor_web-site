import { Container, Section } from '@/components/common';

import styles from './index.module.scss';

const content = {
  title: 'Our team',
};

export const OurTeam: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>
        </div>
      </Container>
    </Section>
  );
};
