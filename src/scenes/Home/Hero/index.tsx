import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { Logo } from '@/components/misc';

import SlideImg1 from '@/assets/images/home/hero_slide-1.jpg';
import SlideImg2 from '@/assets/images/home/hero_slide-2.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { animation } from '@/helpers/framer-motion';

const content = {
  title: ['Bachelor Bunny', 'Gourmet'],
  description: 'Delicious meals delivered to your door',
  benefits: [
    'Personalized \nmenu',
    'Convenient \ndelivery',
    'High-quality \ningredients',
    'Individualized \nservice',
    'Customer \ntrust',
  ],
  slides: [
    { img: SlideImg1, alt: '' },
    { img: SlideImg2, alt: '' },
  ],
};

export const Hero: React.FC = () => {
  const renderSwiper = () => (
    <Swiper
      id="home_hero-swiper"
      effect={'fade'}
      speed={2000}
      noSwiping={true}
      allowTouchMove={false}
      loop={true}
      autoplay={{ delay: 4000 }}
      modules={[EffectFade, Autoplay]}
      className={styles.swiper}
    >
      {content.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            alt={slide.alt}
            src={slide.img}
            width={1920}
            height={1220}
            priority={true}
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderBenefits = () => (
    <ul className={styles.benefitsList}>
      {content.benefits.map((benefit, index) => (
        <motion.li
          {...animation.fadeIn({ delay: 0.15 * index, once: true })}
          key={index}
          className={styles.benefitsItem}
        >
          {benefit}
        </motion.li>
      ))}
    </ul>
  );

  return (
    <Section className={styles.section}>
      <Container>
        {renderSwiper()}

        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <motion.div
                {...animation.zoomIn({ delay: 0.5, duration: 0.8, once: true })}
                className={styles.logoWrapper}
              >
                <Logo />
              </motion.div>

              <h1 className={styles.title}>
                <motion.span {...animation.fadeIn({ once: true })}>{content.title[0]}</motion.span>
                <motion.span {...animation.fadeIn({ delay: 0.3, once: true })}>
                  {content.title[1]}
                </motion.span>
              </h1>
            </div>

            <motion.span
              {...animation.fadeIn({ delay: 0.5, once: true })}
              className={styles.description}
            >
              {content.description}
            </motion.span>
          </div>

          {renderBenefits()}
        </div>
      </Container>
    </Section>
  );
};
