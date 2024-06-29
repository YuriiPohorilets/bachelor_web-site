import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';
import { Logo } from '@/components/misc';

import ContentImg from '@/assets/images/home/about_content.png';

import styles from './index.module.scss';

const content = {
  title: 'About us',
  quote: '“Indulge in gourmet elegance, tailored for the modern gentleman',
  description:
    "Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don't have time to cook. We offer you the convenience and luxury of homestyle, gourmet meals delivered right to your doorstep. \nWe offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives.",
};

export const About: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Quote align="right" className={styles.quote}>
              {content.quote}
            </Quote>
            <Paragraph>{content.description}</Paragraph>
          </div>

          <div className={styles.mediaWrapper}>
            <Image
              alt=""
              src={ContentImg}
              width={546}
              height={549}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />
          </div>

          <div className={styles.logoWrapper}>
            <Logo />
          </div>
        </div>
      </Container>
    </Section>
  );
};
