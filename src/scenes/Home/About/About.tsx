import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';

import MediaImg from '@/assets/images/home-page/about/content-img-1.png';
import { CrownIcon } from '@/assets/icons';

import styles from './About.module.scss';

const content = {
  title: 'About',
  quote: 'Indulge in gourmet elegance, tailored for the modern gentleman',
  description:
    "Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy professionals who don't have time to cook. We offer you the convenience and luxury of homestyle, gourmet meals delivered right to your doorstep. \n We offers a premium dining experience, combining convenience and luxury. Our weekly dinner delivery service is tailored for each client and executed punctually by our courteous customer service representatives. ",
};

export const About: React.FC = () => {
  return (
    <Section shadow="both">
      <div className={styles.iconWrapper}>
        <CrownIcon />
      </div>

      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Quote align="right" className={styles.quote}>
              {content.quote}
            </Quote>

            <div className={styles.descriptionWrapper}>
              <Paragraph>{content.description}</Paragraph>
            </div>
          </div>

          <div className={styles.mediaWrapper}>
            <Image
              alt=""
              src={MediaImg}
              width={546}
              height={568}
              priority={false}
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
