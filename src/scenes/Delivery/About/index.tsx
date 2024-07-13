import { Container, Section } from '@/components/common';
import { VideoPlayer } from '@/components/misc';
import { Button, Paragraph } from '@/components/ui';
import { PagePathname } from '@/types';

import styles from './index.module.scss';

const content = {
  title: 'About us',
  description:
    'Elevate your dining experience with our exclusive service, featuring meticulously planned meals delivered, unpacked, plated, and served with a cocktail by our attentive Bunny Belles.',
};

export const About: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.mediaWrapper}>
            <VideoPlayer src="videos/in-home.mp4" width={1920} height={1080} />
          </div>

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
