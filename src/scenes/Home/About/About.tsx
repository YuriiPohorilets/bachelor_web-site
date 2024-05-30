import Image from 'next/image';

import { Container, Section, VisuallyHidden } from '@/components/common';
import { Paragraph, Quote } from '@/components/ui';

import Img1 from '@/assets/images/home-page/about/img-1.png';

import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <VisuallyHidden>
            <h2>About</h2>
          </VisuallyHidden>

          <div className={styles.contentWrapper}>
            <Quote align="right" className={styles.quote}>
              Indulge in gourmet elegance, tailored for the modern gentleman
            </Quote>

            <div className={styles.paragraph}>
              <Paragraph>
                Bachelor Bunny Gourmet is a gourmet meal delivery and catering service aimed at busy
                professionals who don&apos;t have time to cook. We offer you the convenience and
                luxury of homestyle, gourmet meals delivered right to your doorstep. <br /> We
                offers a premium dining experience, combining convenience and luxury. Our weekly
                dinner delivery service is tailored for each client and executed punctually by our
                courteous customer service representatives.
              </Paragraph>
            </div>
          </div>

          <div className={styles.imgWrapper}>
            <Image alt="" src={Img1} width={546} height={568} property="false" placeholder="blur" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
