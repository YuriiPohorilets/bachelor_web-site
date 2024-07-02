import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { animation } from '@/helpers/framer-motion';
import { Container, Section } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';

import PhotoImg from '@/assets/images/about/about_photo.jpg';

import styles from './index.module.scss';

const content = {
  title: 'About me',
  description:
    'Quality Standard Set by Bachelor Bunny Gourmet Rooted in Integrity, Communication, Professionalism, and High-Quality Service.',
  quote: 'We Strive to be the Most Trusted, Respected, and Appreciated Brand',
};

export const About: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0.2 1', '1 0'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [130, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [-130, 0]);

  return (
    <Section className={styles.section} containerRef={sectionRef}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <motion.div className={styles.mediaWrapper} style={{ y: videoY }}></motion.div>

          <div className={styles.contentWrapper}>
            <motion.div {...animation.fadeIn({})}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </motion.div>

            <motion.div className={styles.imgWrapper} style={{ y: photoY }}>
              <Image
                alt=""
                src={PhotoImg}
                width={435}
                height={850}
                priority={false}
                placeholder="blur"
                className={styles.img}
              />
            </motion.div>

            <motion.div {...animation.fadeIn({})} className={styles.qouteWrapper}>
              <Quote align="right" className={styles.qoute}>
                {content.quote}
              </Quote>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
