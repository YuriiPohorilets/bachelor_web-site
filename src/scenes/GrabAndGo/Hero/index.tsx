import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import { Container, Section } from '@/components/common';

import SlideImg1 from '@/assets/images/grab-and-go/hero_slide-1.jpg';
import SlideImg2 from '@/assets/images/grab-and-go/hero_slide-2.jpg';
import SlideImg3 from '@/assets/images/grab-and-go/hero_slide-3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';
import { Button, Paragraph } from '@/components/ui';

const content = {
  title: 'GRAB & GO',
  label: 'The first meal is free',
  description:
    "Grab N Go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go. Our service offers quick, convenient gourmet meals, perfectly tailored, and packaged to fit into \nyour busy lifestyle, delivered at the clients scheduled time.",
  slides: [
    { img: SlideImg1, alt: '' },
    { img: SlideImg2, alt: '' },
    { img: SlideImg3, alt: '' },
  ],
};

export const Hero: React.FC = () => {
  const renderSwiper = () => (
    <Swiper
      id="grab-and-go_hero-swiper"
      effect={'fade'}
      pagination={{
        el: '#paginationContainer_grab-and-go_hero',
        type: 'bullets',
        bulletClass: styles.sliderBullets,
        bulletActiveClass: styles.sliderBulletsActive,
        clickable: true,
      }}
      speed={2000}
      noSwiping={true}
      allowTouchMove={false}
      loop={true}
      autoplay={{ delay: 4000 }}
      modules={[EffectFade, Autoplay, Pagination]}
      className={styles.swiper}
    >
      {content.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            alt={slide.alt}
            src={slide.img}
            width={1920}
            height={1110}
            priority={true}
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <Section className={styles.section}>
      <Container>
        {renderSwiper()}
        <div id="paginationContainer_grab-and-go_hero" className={styles.pagination} />

        <div className={styles.wrapper}>
          <h1 className={styles.title}>{content.title}</h1>

          <div className={styles.contentWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>

            <Button>Make an order</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
