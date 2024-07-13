import { motion } from 'framer-motion';

import { animation } from '@/helpers/framer-motion';
import { Links } from '@/types';
import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Become A Member Of The Bachelor Club',
  description:
    "Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered, unpacked, plated, and served by our team, elevating your dining experience and making you part of an elite group. \nIndulge in the Art of Mastery, where success is crafted and leisure is defined in the exclusive realm of the Modern Gentleman.",
};

export const Community: React.FC = () => {
  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <motion.h2 {...animation.fadeIn({})} className={styles.title}>
            {content.title}
          </motion.h2>

          <div className={styles.contentWrapper}>
            <motion.div {...animation.fadeIn({})}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </motion.div>

            <motion.div {...animation.fadeIn({})} className={styles.btnWrapper}>
              <Button as="a" target="_blank" href={Links.Youtube}>
                Join the club
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
