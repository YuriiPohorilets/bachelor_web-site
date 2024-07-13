import { animation } from '@/helpers/framer-motion';
import { motion } from 'framer-motion';

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

          <motion.div {...animation.fadeIn({ amount: 0.5 })} className={styles.descriptionWrapper}>
            <Quote align="center" className={styles.description}>
              {content.description}
            </Quote>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
