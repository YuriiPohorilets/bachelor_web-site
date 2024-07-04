import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { CarouselCard } from '@/modules';

import { animation } from '@/helpers/framer-motion';
import { ArrowNavigationIcon } from '@/assets/icons';
import ClientImg from '@/assets/images/home/client_placeholder.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from './index.module.scss';

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
        id="home_clients_prevElBtn"
        aria-label="previous slide"
        type="button"
        className={styles.navigationPrev}
      >
        <ArrowNavigationIcon />
      </button>

      <button
        id="home_clients_nextElBtn"
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
          <motion.h2 {...animation.fadeIn({})} className={styles.title}>
            {content.title}
          </motion.h2>

          <Swiper
            id="home_clients-swiper"
            navigation={{ prevEl: '#home_clients_prevElBtn', nextEl: '#home_clients_nextElBtn' }}
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
                <motion.div
                  {...animation.fadeIn({
                    delay: index <= 3 ? 0.3 * index : 0,
                    amount: 1,
                  })}
                >
                  <CarouselCard>
                    <CarouselCard.ImageWrapper src={item.img} alt={item.description} />

                    <div className={styles.contentWrapper}>
                      <div className={styles.labelWrapper}>
                        <CarouselCard.Label label={item.label} className={styles.cardLabel} />
                        <CarouselCard.Rating rating={item.rating} />
                      </div>

                      <CarouselCard.Description description={item.description} />
                    </div>
                  </CarouselCard>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {renderSliderNavigation()}
        </div>
      </Container>
    </Section>
  );
};
