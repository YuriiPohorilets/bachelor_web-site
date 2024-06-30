import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Logo } from '@/components/misc';
import { Paragraph, PageLink } from '@/components/ui';
import { PagePathname } from '@/types';

import ContentImg1 from '@/assets/images/home/grab_content-1.jpg';
import ContentImg2 from '@/assets/images/home/grab_content-2.jpg';

import styles from './index.module.scss';

const content = {
  title: 'Grab and go',
  description:
    'Your convenient solution for busy days and hectic evenings. Our meal package includes four delicious meals, with two delivered on one day and the remaining two on another  day within \nthe same week. Enjoy gourmet meals without the hassle, tailored to your busy lifestyle.',
};

export const ServiceGrabAndGo: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div className={styles.mediaWrapper}>
            <Image
              alt=""
              src={ContentImg1}
              width={940}
              height={557}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />

            <Image
              alt=""
              src={ContentImg2}
              width={467}
              height={478}
              priority={false}
              placeholder="blur"
              className={styles.img}
            />
          </div>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
            <PageLink page={PagePathname.GrabAndGo} badge className={styles.link} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
