import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { CarouselCard } from '@/modules';

import ClientImg from '@/assets/images/home/client_placeholder.jpg';

import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/free-mode';
import { ArrowNavigationIcon } from '@/assets/icons';

const content = {
  title: 'Our clients',
  slides: [
    {
      img: ClientImg,
      label: 'Jason',
      rating: 4.5,
      description: 'Graduation Party - a true feast of taste !!!!',
    },
    {
      img: ClientImg,
      label: 'Tyler',
      rating: 4,
      description: 'Los Angeles Themed Party - gourmet treats and impeccable staff:) ',
    },
    {
      img: ClientImg,
      label: 'Michael',
      rating: 5,
      description: 'Los Angeles Birthday Bash - exquisite food and fantastic ambiance!',
    },
    {
      img: ClientImg,
      label: 'Brandon',
      rating: 4,
      description: 'Los Angeles Party - unforgettable menu and top-notch service!',
    },
    {
      img: ClientImg,
      label: 'Brian',
      rating: 4.2,
      description: 'Chicago Bachelor Bash - Delicious dishes and incredible beauties Bells!',
    },
  ],
};

export const Clients: React.FC = () => {
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

      <button
        id="nextElBtn"
        aria-label="next slide"
        type="button"
        className={styles.navigationNext}
      >
        <ArrowNavigationIcon />
      </button>
    </div>
  );

  return (
    <Section>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>

          <Swiper
            navigation={{ prevEl: '#prevElBtn', nextEl: '#nextElBtn' }}
            grabCursor
            slidesPerView={'auto'}
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
                  <CarouselCard.ImageWrapper src={item.img} alt={item.description} />

                  <div className={styles.contentWrapper}>
                    <div className={styles.labelWrapper}>
                      <CarouselCard.Label label={item.label} />
                      <CarouselCard.Rating rating={item.rating} />
                    </div>

                    <CarouselCard.Description description={item.description} />
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
