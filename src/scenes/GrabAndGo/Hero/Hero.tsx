import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Paragraph } from '@/components/ui';
import { Slider } from '@/modules';

import Slide1Img from '@/assets/images/grab-and-go-page/hero/slide-1.jpg';
import Slide2Img from '@/assets/images/grab-and-go-page/hero/slide-2.jpg';
import Slide3Img from '@/assets/images/grab-and-go-page/hero/slide-3.jpg';

import styles from './Hero.module.scss';

const content = {
  title: 'Grab & Go',
  subtitle: 'The first meal is free',
  description:
    "Grab N Go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go.\nOur service offers quick, convenient gourmet meals, perfectly tailored, and packaged to fit into \nyour busy lifestyle, delivered at the clients scheduled time.",
  slides: [{ img: Slide1Img }, { img: Slide2Img }, { img: Slide3Img }],
};

export const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <Slider
            className={styles.sliderWrapper}
            fullWidth={true}
            pagination={true}
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
            <h1 className={styles.title}>{content.title}</h1>

            <div className={styles.descriptionWrapper}>
              <h2 className={styles.subtitle}>{content.subtitle}</h2>

              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
