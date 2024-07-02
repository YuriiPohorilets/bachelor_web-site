import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common';
import { animation } from '@/helpers/framer-motion';

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
            <motion.h1 {...animation.fadeIn({ once: true })} className={styles.title}>
              {content.title}
            </motion.h1>
            <motion.span
              {...animation.fadeIn({ delay: 0.3, once: true })}
              className={styles.subtitle}
            >
              {content.subtitle}
            </motion.span>
          </div>

          <motion.p
            {...animation.fadeIn({ delay: 0.5, once: true })}
            className={styles.description}
          >
            {content.description}
          </motion.p>
        </div>
      </Container>
    </Section>
  );
};
