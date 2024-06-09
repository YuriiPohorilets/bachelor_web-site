import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { PageLink } from '@/components/misc';
import { PagePathname } from '@/types';

import { CrownIcon } from '@/assets/icons';
import ContentImg1 from '@/assets/images/home-page/services/grab-and-go/content-1.jpeg';
import ContentImg2 from '@/assets/images/home-page/services/grab-and-go/content-2.jpeg';

import styles from './ServiceGrabAndGo.module.scss';

const content = {
  title: 'Grab & go',
  description:
    'Your convenient solution for busy days and hectic evenings. Our meal package includes four delicious meals, with two delivered on one day and the remaining two on another  day within \n the same week. Enjoy gourmet meals without the hassle, tailored to your busy lifestyle.',
};

export const ServiceGrabAndGo: React.FC = () => {
  return (
    <Section>
      <div className={styles.iconWrapper}>
        <CrownIcon />
      </div>

      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.mediaWrapper}>
            <div className={styles.imgWrapper}>
              <Image
                alt=""
                src={ContentImg2}
                width={940}
                height={557}
                priority={false}
                placeholder="blur"
              />
            </div>

            <div className={styles.imgWrapper}>
              <Image
                alt=""
                src={ContentImg1}
                width={467}
                height={478}
                priority={false}
                placeholder="blur"
              />
            </div>
          </div>

          <div className={styles.contentWrapper}>
            <Paragraph>{content.description}</Paragraph>

            <PageLink href={PagePathname.GrabAndGo} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
