import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { animation } from '@/helpers/framer-motion';

import BgImg from '@/assets/images/about/story_content.jpg';

import styles from './index.module.scss';

const content = {
  title: 'Here’s a little story',
  description: [
    'After seven successful years in graphic design and visual communications, Sophie felt unfulfilled managing her \nboutique design firm. She decided to pursue a new venture and launched Bachelor Bunny Gourmet, a high-end catering service tailored for busy professional men seeking fine dining experiences at home or the office. The idea for Bachelor Bunny Gourmet struck Sophie while observing construction workers eating from a food truck near her condo.',
    'She prepared and distributed 20 FREE packed lunches to the workers, which quickly resulted in 10 purchase orders the next day. This initial success inspired Sophie to focus on her new gourmet catering concept. \nSince its inception, Bachelor Bunny Gourmet has experienced significant growth, thanks to the support and feedback from clients. Sophie is excited about the future and looks forward to expanding her business further.',
  ],
  imgLabel: 'Photo of construction',
};

export const Story: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0 1', '1 1'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  return (
    <Section containerRef={sectionRef}>
      <Container>
        <div className={styles.wrapper}>
          <motion.h2 {...animation.fadeIn({})} className={styles.title}>
            {content.title}
          </motion.h2>

          <motion.div className={styles.mediaWrapper} style={{ x: photoY }}>
            <Image
              alt={content.imgLabel}
              src={BgImg}
              width={1311}
              height={926}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />

            <motion.span {...animation.fadeIn({})} className={styles.imgLabel}>
              {content.imgLabel}
            </motion.span>
          </motion.div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>
              <motion.span {...animation.fadeIn({})}>{content.description[0]}</motion.span>
            </Paragraph>

            <Paragraph initialLetter={false} className={styles.description}>
              <motion.span {...animation.fadeIn({ delay: 0.3 })}>
                {content.description[1]}
              </motion.span>
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};
