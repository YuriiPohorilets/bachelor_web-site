import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Benefits, Slider } from '@/modules';
import { CrownIcon } from '@/assets/icons';
import SlideImg1 from '@/assets/images/home-page/hero/slide-1.jpg';
import SlideImg2 from '@/assets/images/home-page/hero/slide-2.jpg';

import styles from './Hero.module.scss';

const content = {
  title: ['Bachelor bunny', 'gourmet'],
  description: 'Delicious meals delivered to your door',
  slides: [{ img: SlideImg1 }, { img: SlideImg2 }],
};

export const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <Slider
            className={styles.sliderWrapper}
            fullWidth={true}
            pagination={false}
            length={content.slides.length}
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
                    height={1080}
                    className={styles.imgSlide}
                  />
                </Slider.Slide>
              ))}
            </Slider.Container>
          </Slider>

          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.iconWrapper}>
                <CrownIcon />
              </div>

              <h1 className={styles.title}>
                {content.title[0]} <span>{content.title[1]}</span>
              </h1>
            </div>

            <p className={styles.description}>{content.description}</p>
          </div>

          <Benefits />
        </div>
      </Container>
    </Section>
  );
};
