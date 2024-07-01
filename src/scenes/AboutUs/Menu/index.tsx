import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { CarouselCard } from '@/modules';

import { ArrowNavigationIcon } from '@/assets/icons';
import MenuImg from '@/assets/images/about/menu_placeholder.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from './index.module.scss';

const content = {
  title: 'Our menu',
  slides: [
    { img: MenuImg, label: 'Title 1', description: 'Description' },
    { img: MenuImg, label: 'Title 2', description: 'Description' },
    { img: MenuImg, label: 'Title 3', description: 'Description' },
    { img: MenuImg, label: 'Title 4', description: 'Description' },
    { img: MenuImg, label: 'Title 5', description: 'Description' },
    { img: MenuImg, label: 'Title 6', description: 'Description' },
    { img: MenuImg, label: 'Title 7', description: 'Description' },
    { img: MenuImg, label: 'Title 8', description: 'Description' },
    { img: MenuImg, label: 'Title 9', description: 'Description' },
    { img: MenuImg, label: 'Title 10', description: 'Description' },
    { img: MenuImg, label: 'Title 11', description: 'Description' },
    { img: MenuImg, label: 'Title 12', description: 'Description' },
    { img: MenuImg, label: 'Title 13', description: 'Description' },
    { img: MenuImg, label: 'Title 14', description: 'Description' },
    { img: MenuImg, label: 'Title 15', description: 'Description' },
  ],
};

export const Menu: React.FC = () => {
  const renderSliderNavigation = () => (
    <div className={styles.navigation}>
      <button
        id="about_menu_prevElBtn"
        aria-label="previous slide"
        type="button"
        className={styles.navigationPrev}
      >
        <ArrowNavigationIcon />
      </button>

      <button
        id="about_menu_nextElBtn"
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
            id="about_menu-swiper"
            navigation={{ prevEl: '#about_menu_prevElBtn', nextEl: '#about_menu_nextElBtn' }}
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
                  <CarouselCard.ImageWrapper src={item.img} alt={item.description} />

                  <div className={styles.contentWrapper}>
                    <div className={styles.labelWrapper}>
                      <CarouselCard.Label label={item.label} />
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
