import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Container, Section } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';
import { Logo } from '@/components/misc';
import { animation } from '@/helpers/framer-motion';

import ContentImg from '@/assets/images/home/about_content.png';

import styles from './index.module.scss';

const content = {
  title: 'About us',
  quote: '“Indulge in gourmet elegance, tailored for the modern gentleman',
  description:
    "Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don't have time to cook. We offer you the convenience and luxury of homestyle, gourmet meals delivered right to your doorstep. \nWe offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives.",
};

export const About: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0.3 1', '1 0'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [130, 0]);

  return (
    <Section className={styles.section} containerRef={sectionRef}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <motion.div {...animation.fadeIn({})}>
              <Quote align="right" className={styles.quote}>
                {content.quote}
              </Quote>
            </motion.div>

            <motion.div {...animation.fadeIn({})}>
              <Paragraph>{content.description}</Paragraph>
            </motion.div>
          </div>

          <motion.div className={styles.mediaWrapper} style={{ y: photoY }}>
            <Image
              alt=""
              src={ContentImg}
              width={546}
              height={549}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />
          </motion.div>

          <div className={styles.logoWrapper}>
            <Logo />
          </div>
        </div>
      </Container>
    </Section>
  );
};
