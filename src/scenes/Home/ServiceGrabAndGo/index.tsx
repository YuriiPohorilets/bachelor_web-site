import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Container, Section } from '@/components/common';
import { Logo } from '@/components/misc';
import { Paragraph, PageLink } from '@/components/ui';
import { PagePathname } from '@/types';
import { animation } from '@/helpers/framer-motion';

import ContentImg1 from '@/assets/images/home/grab_content-1.jpg';
import ContentImg2 from '@/assets/images/home/grab_content-2.jpg';

import styles from './index.module.scss';

const content = {
  title: 'Grab and go',
  description:
    'Your convenient solution for busy days and hectic evenings. Our meal package includes four delicious meals, with two delivered on one day and the remaining two on another  day within \nthe same week. Enjoy gourmet meals without the hassle, tailored to your busy lifestyle.',
};

export const ServiceGrabAndGo: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0 1', '0.5 0'],
  });

  const imageTopY = useTransform(scrollYProgress, [0, 1], [130, 0]);
  const imageBottomY = useTransform(scrollYProgress, [0, 1], [0, 130]);

  return (
    <Section containerRef={sectionRef}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.mediaWrapper}>
            <motion.div className={styles.imgWrapper} style={{ y: imageBottomY }}>
              <Image
                alt=""
                src={ContentImg1}
                width={940}
                height={557}
                priority={false}
                placeholder="blur"
                className={styles.img}
              />
            </motion.div>

            <motion.div className={styles.imgWrapper} style={{ y: imageTopY }}>
              <Image
                alt=""
                src={ContentImg2}
                width={467}
                height={478}
                priority={false}
                placeholder="blur"
                className={styles.img}
              />
            </motion.div>
          </div>

          <div className={styles.contentWrapper}>
            <motion.div {...animation.fadeIn({ amount: 0.5 })}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </motion.div>

            <motion.div {...animation.fadeIn({ amount: 0.5 })}>
              <PageLink page={PagePathname.GrabAndGo} badge className={styles.link} />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
