import { Links } from '@/types';
import { Container, Section } from '@/components/common';
import { Button, Paragraph } from '@/components/ui';

import styles from './index.module.scss';

const content = {
  title: 'YouTube Channel',
  description:
    'Subscribe to our channel to watch Chef Sophi create delicious dishes! Don’t miss out on her amazing cooking tips, recipes, and culinary adventures. \nJoin us and become a part of our foodie community today!',
};

export const Community: React.FC = () => {
  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <div className={styles.contentWrapper}>
            <Paragraph>{content.description}</Paragraph>
            <Button as="a" target="_blank" href={Links.Youtube}>
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
