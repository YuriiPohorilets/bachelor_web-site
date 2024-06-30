import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Container, Section } from '@/components/common';

import { ArrowNavigationIcon } from '@/assets/icons';
import SlideImg1 from '@/assets/images/home/services_slide-1.jpg';
import SlideImg2 from '@/assets/images/home/services_slide-2.jpg';
import SlideImg3 from '@/assets/images/home/services_slide-3.jpg';

import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const content = {
  title: 'Our services',
  slides: [
    {
      title: 'GRAB & GO',
      description:
        'Your solution for busy days, with four gourmet meals delivered across two days.',
      img: SlideImg1,
      alt: '',
    },
    {
      title: 'In-Home Executive \nDelivery',
      description:
        'Luxury dining at home with beautiful Bunny Bells: delivery, cocktails, conversation.',
      img: SlideImg2,
      alt: '',
    },
    {
      title: 'Catering & Events',
      description: 'Elevate events with Bachelor Bunny Gourmet Catering, tailored for men.',
      img: SlideImg3,
      alt: '',
    },
  ],
};

export const Services: React.FC = () => {
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const renderSliderNavigation = () => (
    <div className={styles.navigation}>
      <button
        id="prevElBtn"
        aria-label="previous slide"
        type="button"
        className={styles.navigationPrev}
      >
        <ArrowNavigationIcon />
      </button>

      <p className={styles.slideDescription}>{content.slides[currentSlideId].description}</p>

      <button
        id="nextElBtn"
        aria-label="next slide"
        type="button"
        className={styles.navigationNext}
      >
        <ArrowNavigationIcon />
      </button>

      <span className={styles.label}>Our proposals</span>
    </div>
  );

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <Swiper
            navigation={{ prevEl: '#prevElBtn', nextEl: '#nextElBtn' }}
            pagination={{
              el: '#paginationContainer_services',
              type: 'bullets',
              bulletClass: styles.sliderBullets,
              bulletActiveClass: styles.sliderBulletsActive,
              clickable: true,
            }}
            loop={true}
            noSwiping={true}
            allowTouchMove={false}
            autoplay={{ delay: 4000 }}
            modules={[Pagination, Navigation, Autoplay]}
            speed={1400}
            onSlideChange={({ realIndex }) => setCurrentSlideId(realIndex)}
            className={styles.swiper}
          >
            {content.slides.map((item, index) => (
              <SwiperSlide key={index} data-index={index}>
                <Image
                  alt={item.alt}
                  src={item.img}
                  width={1920}
                  height={1000}
                  priority={false}
                  placeholder="blur"
                  className={styles.slideImg}
                />

                <div className={styles.slideContentWrapper}>
                  <h3 className={styles.slideTitle}>{item.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div id="paginationContainer_services" className={styles.pagination} />

          {renderSliderNavigation()}
        </div>
      </Container>
    </Section>
  );
};
