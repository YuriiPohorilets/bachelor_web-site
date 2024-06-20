import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';
import PhotoImg from '@/assets/images/about-page/about/photo.jpg';

import styles from './About.module.scss';

const content = {
  description:
    'Quality Standard Set by Bachelor Bunny Gourmet Rooted in Integrity, Communication, Professionalism, and High-Quality Service.',
  quote: 'We Strive to be the Most Trusted, Respected, and Appreciated Brand',
};

export const About: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">About me</h2>
          <div className={styles.mediaWrapper}></div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>

            <div className={styles.imgWrapper}>
              <Image
                alt="Sophia Jennings - Owner & Head chef"
                src={PhotoImg}
                width={435}
                height={850}
                priority={false}
                className={styles.img}
              />
            </div>

            <Quote align="right" className={styles.quote}>
              {content.quote}
            </Quote>
          </div>
        </div>
      </Container>
    </Section>
  );
};
