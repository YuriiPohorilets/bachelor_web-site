import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';
import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'Catering & Events',
  description:
    "Bachelor Bunny Gourmet brings an experience, not just food and seamless event management, to your male-themed events. Our premier catering is perfect for bachelor parties, cigar \nnights, sports gatherings, and any guys' night, adding gourmet sophistication. Our attractive CSRs - Bunny Bells, tastefully dressed to complement your event's theme, ensure a memorable, high-class service.",
};

export const Hero: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{content.title}</h1>

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
