import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Quote, Subtitle } from '@/components/ui';
import { Slider, Benefits } from '@/modules';

import styles from './home.module.scss';

import img1 from '@/assets/images/home-page/hero/slide-1.jpg';
import img2 from '@/assets/images/home-page/hero/slide-2.jpg';
import { Paragraph } from '@/components/ui/Paragraph/Paragraph';

const HomePage = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.sliderWrapper}>
            <Slider delay={5000} duration={2}>
              <Slider.Container>
                <Slider.Slide>
                  <Image alt="" src={img1} priority={true} placeholder="blur" />
                </Slider.Slide>

                <Slider.Slide>
                  <Image alt="" src={img2} priority={true} placeholder="blur" />
                </Slider.Slide>
              </Slider.Container>
            </Slider>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span>Bachelor Bunny</span>
                <span>Gourmet</span>
              </h1>

              <Subtitle>Delicious meals delivered to your door</Subtitle>

              <div style={{ maxWidth: '960px' }}>
                <Quote align="right">
                  We Strive to be the Most Trusted, Respected, and Appreciated Brand
                </Quote>
              </div>
            </div>

            <Benefits />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HomePage;
