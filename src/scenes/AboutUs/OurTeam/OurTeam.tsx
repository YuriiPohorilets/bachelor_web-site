import { Container, Section } from '@/components/common';
import styles from './OurTeam.module.scss';

export const OurTeam: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Our team</h2>
        </div>
      </Container>
    </Section>
  );
};
