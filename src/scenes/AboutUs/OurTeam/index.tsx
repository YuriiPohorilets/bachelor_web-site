import { motion } from 'framer-motion';
import { Container, Section } from '@/components/common';
import { animation } from '@/helpers/framer-motion';

import styles from './index.module.scss';

const content = {
  title: 'Our team',
};

export const OurTeam: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <motion.div className={styles.wrapper}>
          <motion.h2 {...animation.fadeIn({})} className={styles.title}>
            {content.title}
          </motion.h2>
        </motion.div>
      </Container>
    </Section>
  );
};
