import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Container, Section } from '@/components/common';
import { PageLink, Paragraph } from '@/components/ui';

import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'Catering and Events',
  description:
    "Elevate your male-themed events with Bachelor Bunny Gourmet Catering&Events.We go beyond just providing food and seamless event management;  we deliver an unforgettable experience. \nOur premier catering service is tailored for bachelor parties, cigar nights, sports gatherings, and any guys' night, infusing a touch of gourmet sophistication into every event.",
};

export const ServiceCatering: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0.6 1', '1 1'],
  });

  const buttonY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <Section className={styles.section} containerRef={sectionRef}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <motion.div style={{ x: descriptionY }}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </motion.div>

            <motion.div style={{ x: buttonY }}>
              <PageLink page={PagePathname.CateringAndEvents} badge />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
