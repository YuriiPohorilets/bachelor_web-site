import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Benefits, Slider } from '@/modules';
import { Subtitle } from '@/components/ui';

import { LogoIcon } from '@/assets/icons';
import SlideImg1 from '@/assets/images/home-page/hero/slide-1.jpg';
import SlideImg2 from '@/assets/images/home-page/hero/slide-2.jpg';

import styles from './Hero.module.scss';

const slides = [
  { id: 'slide-1', alt: '', width: 1920, height: 1220, img: SlideImg1 },
  { id: 'slide-2', alt: '', width: 1920, height: 1220, img: SlideImg2 },
];

export const Hero: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.sliderWrapper}>
            <Slider duration={2} delay={5000} effect="fade">
              <Slider.Container>
                {slides.map(item => (
                  <Slider.Slide key={item.id}>
                    <Image
                      alt={item.alt}
                      src={item.img}
                      width={item.width}
                      height={item.height}
                      priority={false}
                      placeholder="blur"
                    />
                  </Slider.Slide>
                ))}
              </Slider.Container>
            </Slider>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.innerTitleWrapper}>
                <div className={styles.logo}>
                  <LogoIcon />
                </div>

                <h1 className={styles.title}>
                  <span>Bachelor Bunny</span>
                  <span>Gourmet</span>
                </h1>
              </div>

              <Subtitle>Delicious meals delivered to your door</Subtitle>
            </div>

            <Benefits />
          </div>
        </div>
      </Container>
    </Section>
  );
};
