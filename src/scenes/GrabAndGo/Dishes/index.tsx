import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { CarouselCard } from '@/modules';
import { ArrowNavigationIcon } from '@/assets/icons';
import DishImg from '@/assets/images/grab-and-go/dish_placeholder.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from './index.module.scss';

const content = {
  title: 'Signature dishes',
  slides: [
    { img: DishImg, label: 'Title 1' },
    { img: DishImg, label: 'Title 2' },
    { img: DishImg, label: 'Title 3' },
    { img: DishImg, label: 'Title 4' },
    { img: DishImg, label: 'Title 5' },
    { img: DishImg, label: 'Title 6' },
    { img: DishImg, label: 'Title 7' },
    { img: DishImg, label: 'Title 8' },
    { img: DishImg, label: 'Title 9' },
    { img: DishImg, label: 'Title 10' },
  ],
  label: '-20% off week order',
};

export const Dishes: React.FC = () => {
  const renderSliderNavigation = () => (
    <div className={styles.navigation}>
      <button
        id="grab-and-go_dishes_prevElBtn"
        aria-label="previous slide"
        type="button"
        className={styles.navigationPrev}
      >
        <ArrowNavigationIcon />
      </button>

      <span className={styles.label}>{content.label}</span>

      <button
        id="grab-and-go_dishes_nextElBtn"
        aria-label="next slide"
        type="button"
        className={styles.navigationNext}
      >
        <ArrowNavigationIcon />
      </button>
    </div>
  );

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <Swiper
            id="grab-and-go_dishes-swiper"
            navigation={{
              prevEl: '#grab-and-go_dishes_prevElBtn',
              nextEl: '#grab-and-go_dishes_nextElBtn',
            }}
            grabCursor
            slidesPerView="auto"
            spaceBetween={30}
            freeMode={false}
            speed={800}
            centeredSlides={false}
            modules={[FreeMode, Navigation]}
            className={styles.swiper}
          >
            {content.slides.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <CarouselCard>
                  <CarouselCard.ImageWrapper src={item.img} alt={item.label} />

                  <div className={styles.contentWrapper}>
                    <div className={styles.labelWrapper}>
                      <CarouselCard.Label label={item.label} />
                    </div>
                  </div>
                </CarouselCard>
              </SwiperSlide>
            ))}
          </Swiper>

          {renderSliderNavigation()}
        </div>
      </Container>
    </Section>
  );
};
