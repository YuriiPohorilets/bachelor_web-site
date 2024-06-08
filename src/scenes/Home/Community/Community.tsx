import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';

import styles from './Community.module.scss';

const content = {
  title: 'Become A Member Of The Bachelor Club',
  description:
    "Join 'The Bachelor's Club' for an exclusive dining experience where meals are delivered, unpacked, plated, and served by our team, elevating your dining experience and making you part of an elite group. \n Indulge in the Art of Mastery, where success is crafted and leisure is defined in the exclusive realm of the Modern Gentleman.",
};

export const Community: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{content.title}</h2>

            <div className={styles.descriptionWrapper}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
