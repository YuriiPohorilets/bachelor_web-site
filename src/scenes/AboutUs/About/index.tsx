import Image from 'next/image';

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
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.mediaWrapper}></div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>

            <div className={styles.imgWrapper}>
              <Image
                alt=""
                src={PhotoImg}
                width={435}
                height={850}
                priority={false}
                placeholder="blur"
                className={styles.img}
              />
            </div>

            <div className={styles.qouteWrapper}>
              <Quote align="right" className={styles.qoute}>
                {content.quote}
              </Quote>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
