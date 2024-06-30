import { Container, Section } from '@/components/common';
import { PageLink, Paragraph } from '@/components/ui';

import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'Catering and Events',
  description:
    "Elevate your male-themed events with Bachelor Bunny Gourmet Catering&Events.We go beyond just providing food and seamless event management;  we deliver an unforgettable experience. \nOur premier catering service is tailored for bachelor parties, cigar nights, sports gatherings, and any guys' night, infusing a touch of gourmet sophistication into every event.",
};

export const ServiceCatering: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
            <PageLink page={PagePathname.CateringAndEvents} badge />
          </div>
        </div>
      </Container>
    </Section>
  );
};
