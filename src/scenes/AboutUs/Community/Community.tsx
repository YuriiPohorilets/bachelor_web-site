import { Container, Section } from '@/components/common';

import styles from './Community.module.scss';
import { Paragraph } from '@/components/ui';

const content = {
  title: 'YouTube Channel',
  description:
    'Subscribe to our channel to watch Chef Sophi create delicious dishes! Don’t miss out on her amazing cooking tips, recipes, and culinary adventures.\nJoin us and become a part of our foodie community today!',
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
