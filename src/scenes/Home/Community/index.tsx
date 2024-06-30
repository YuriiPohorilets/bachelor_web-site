import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'Become A Member Of The Bachelor Club',
  description:
    "Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered, unpacked, plated, and served by our team, elevating your dining experience and making you part of an elite group. \nIndulge in the Art of Mastery, where success is crafted and leisure is defined in the exclusive realm of the Modern Gentleman.",
};

export const Community: React.FC = () => {
  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
            <Button as="a" href="">
              Join the club
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
