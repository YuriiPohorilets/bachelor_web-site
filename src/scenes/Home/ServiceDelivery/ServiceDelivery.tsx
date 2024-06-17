import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { PageLink } from '@/components/misc';
import { Slider } from '@/modules';
import { PagePathname } from '@/types';

import styles from './ServiceDelivery.module.scss';

import SlideImg1 from '@/assets/images/home-page/services/delivery/slide-1.jpg';
import SlideImg2 from '@/assets/images/home-page/services/delivery/slide-2.jpg';

const content = {
  description:
    "Experience luxury dining at home with our elevated service! Our attractive customer service- Bunny Bells not only deliver your pre-cooked dinner and pour a perfectly paired cocktail but also engage in light conversation as they plate \n your meal. You're left to enjoy your dinner while they head to the next delivery.",
  slides: [{ img: SlideImg1 }, { img: SlideImg2 }],
};

export const ServiceDelivery: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <Slider
            className={styles.sliderWrapper}
            fullWidth={true}
            pagination={false}
            length={2}
            config={{
              effect: 'fade',
              delay: 5000,
              duration: 250,
              autoplay: true,
            }}
          >
            <Slider.Container>
              {content.slides.map((item, index) => (
                <Slider.Slide key={index}>
                  <Image
                    alt=""
                    src={item.img}
                    width={1920}
                    height={1100}
                    className={styles.imgSlide}
                  />
                </Slider.Slide>
              ))}
            </Slider.Container>
          </Slider>

          <div className={styles.contentWrapper}>
            <Paragraph>{content.description}</Paragraph>

            <PageLink href={PagePathname.Delivery} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
