import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { Paragraph, PageLink } from '@/components/ui';
import { PagePathname } from '@/types';

import SlideImg1 from '@/assets/images/home/delivery_slide-1.jpg';
import SlideImg2 from '@/assets/images/home/delivery_slide-2.jpg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import styles from './index.module.scss';

const content = {
  title: 'In-Home Executive Delivery',
  description:
    "Experience luxury dining at home with our elevated service! Our attractive customer service- Bunny Bells not only deliver your pre-cooked dinner and pour a perfectly paired cocktail but also engage in light conversation as they plate \nyour meal. You're left to enjoy your dinner while they head to the next delivery.",
  slides: [
    { alt: '', img: SlideImg1 },
    { alt: '', img: SlideImg2 },
  ],
};

export const ServiceDelivery: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0 1', '0 0.3'],
  });

  const descriptionY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const buttonY = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  const renderSwiper = () => (
    <Swiper
      id="home_delivery-swiper"
      pagination={{
        el: '#paginationContainer_delivery',
        type: 'bullets',
        bulletClass: styles.sliderBullets,
        bulletActiveClass: styles.sliderBulletsActive,
        clickable: true,
      }}
      effect={'fade'}
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
            height={1100}
            priority={true}
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <Section containerRef={sectionRef}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          {renderSwiper()}
          <div id="paginationContainer_delivery" className={styles.pagination} />

          <div className={styles.contentWrapper}>
            <motion.div style={{ x: descriptionY }}>
              <Paragraph className={styles.description}>{content.description}</Paragraph>
            </motion.div>

            <motion.div style={{ x: buttonY }}>
              <PageLink page={PagePathname.Delivery} badge />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
