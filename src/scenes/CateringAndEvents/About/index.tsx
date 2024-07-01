import { Container, Section } from '@/components/common';

import { Button, Paragraph } from '@/components/ui';
import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'About us',
  description:
    "Elevate your male-themed events with Bachelor Bunny Gourmet Catering/Events, delivering an unforgettable experience beyond food and seamless event management. Tailored for bachelor\n parties, cigar nights, sports gatherings, and any guys' night, infusing gourmet sophistication into every event.",
};

export const About: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.mediaWrapper}></div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
            <Button as="a" href={PagePathname.ContactUs} target="_self">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
