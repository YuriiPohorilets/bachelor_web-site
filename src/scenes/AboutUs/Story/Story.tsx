import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import BgImg from '@/assets/images/about-page/story/bg.jpg';

import styles from './Story.module.scss';

const content = {
  description: [
    'After seven successful years in graphic design and visual communications, Sophie felt unfulfilled managing her \n boutique design firm. She decided to pursue a new venture and launched Bachelor Bunny Gourmet, a high-end catering service tailored for busy professional men seeking fine dining experiences at home or the office. The idea for Bachelor Bunny Gourmet struck Sophie while observing construction workers eating from a food truck near her condo.',
    'She prepared and distributed 20 FREE packed lunches to the workers, which quickly resulted in 10 purchase orders the next day. This initial success inspired Sophie to focus on her new gourmet catering concept. \n Since its inception, Bachelor Bunny Gourmet has experienced significant growth, thanks to the support and feedback from clients. Sophie is excited about the future and looks forward to expanding her business further.',
  ],
};

export const Story: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">Our story</h2>
          <span className={styles.label}>Here`s a little story</span>

          <div className={styles.imgWrapper}>
            <Image
              alt=""
              src={BgImg}
              width={1311}
              height={926}
              priority={false}
              className={styles.img}
            />

            <span className={styles.caption}>Photo of construction</span>
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
