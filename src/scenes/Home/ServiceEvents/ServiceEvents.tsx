import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { PageLink } from '@/components/misc';
import { PagePathname } from '@/types';

import BgImg from '@/assets/images/home-page/services/events/bg.jpg';

import styles from './ServiceEvents.module.scss';

const content = {
  description:
    "Elevate your male-themed events with Bachelor Bunny Gourmet Catering&Events.We go beyond just providing food and seamless event management;  we deliver an unforgettable experience. \n Our premier catering service is tailored for bachelor parties, cigar nights, sports gatherings, and any guys' night, infusing a touch of gourmet sophistication into every event. ",
};

export const ServiceEvents: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>

            <PageLink href={PagePathname.CateringAndEvents} />
          </div>

          <div className={styles.imgWrapper}>
            <Image
              alt=""
              src={BgImg}
              width={1920}
              height={1110}
              priority={false}
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
