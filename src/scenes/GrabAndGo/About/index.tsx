import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'About us',
  description:
    'Bachelor Bunny Grab-N-Go is designed to be simple andconvenient for those who are on the go or just arriving home at the end of the day. Within the four (4) meal package, two meals are delivered on one \nday and the remaining two are delivered on another day, in the same week. Usually delivery schedule days are Monday / Wednesdays or Tuesday / Thursdays. Clients receive their meals in a custom brand delivery box that contains tin pans to secure and keep the food warm.',
};

export const About: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
            <Button>Make an order</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
