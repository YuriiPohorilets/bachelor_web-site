import { Container, Section } from '@/components/common';

import styles from './index.module.scss';

const content = {
  title: 'Sophia Jennings',
  subtitle: 'Owner & Head Chef',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

export const Hero: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{content.title}</h1>
            <span className={styles.subtitle}>{content.subtitle}</span>
          </div>

          <p className={styles.description}>{content.description}</p>
        </div>
      </Container>
    </Section>
  );
};
