import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { PageLink } from '@/components/misc';
import { PagePathname } from '@/types';

import styles from './ServiceDelivery.module.scss';
import Image from 'next/image';
import Img from '@/assets/images/home-page/services/delivery/img.jpg';

const content = {
  description:
    "Experience luxury dining at home with our elevated service! Our attractive customer service- Bunny Bells not only deliver your pre-cooked dinner and pour a perfectly paired cocktail but also engage in light conversation as they plate \n your meal. You're left to enjoy your dinner while they head to the next delivery.",
};

export const ServiceDelivery: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <Image alt="" src={Img} width={1920} height={1100} />
          </div>

          <div className={styles.contentWrapper}>
            <Paragraph>{content.description}</Paragraph>

            <PageLink href={PagePathname.Delivery} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
