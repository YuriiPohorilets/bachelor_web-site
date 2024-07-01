import { Container, Section } from '@/components/common';

import BgImg from '@/assets/images/about/story_content.jpg';

import styles from './index.module.scss';
import Image from 'next/image';
import { Paragraph } from '@/components/ui';

const content = {
  title: 'Here’s a little story',
  description: [
    'After seven successful years in graphic design and visual communications, Sophie felt unfulfilled managing her \nboutique design firm. She decided to pursue a new venture and launched Bachelor Bunny Gourmet, a high-end catering service tailored for busy professional men seeking fine dining experiences at home or the office. The idea for Bachelor Bunny Gourmet struck Sophie while observing construction workers eating from a food truck near her condo.',
    'She prepared and distributed 20 FREE packed lunches to the workers, which quickly resulted in 10 purchase orders the next day. This initial success inspired Sophie to focus on her new gourmet catering concept. \nSince its inception, Bachelor Bunny Gourmet has experienced significant growth, thanks to the support and feedback from clients. Sophie is excited about the future and looks forward to expanding her business further.',
  ],
  imgLabel: 'Photo of construction',
};

export const Story: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <div className={styles.mediaWrapper}>
            <Image
              alt={content.imgLabel}
              src={BgImg}
              width={1311}
              height={926}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />

            <span className={styles.imgLabel}>{content.imgLabel}</span>
          </div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description[0]}</Paragraph>
            <Paragraph initialLetter={false} className={styles.description}>
              {content.description[1]}
            </Paragraph>
          </div>
        </div>
      </Container>
    </Section>
  );
};
