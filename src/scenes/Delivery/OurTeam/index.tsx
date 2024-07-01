import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import { Container, Section } from '@/components/common';
import { CarouselCard } from '@/modules';
import { Paragraph } from '@/components/ui';
import { Logo } from '@/components/misc';

import { ArrowNavigationIcon } from '@/assets/icons';
import SlideImg1 from '@/assets/images/delivery/team_slide-1.jpg';
import SlideImg2 from '@/assets/images/delivery/team_slide-2.jpg';
import SlideImg3 from '@/assets/images/delivery/team_slide-3.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import styles from './index.module.scss';

const content = {
  title: 'Our Bunny Bells',
  description:
    "Not only are your dinner meals organized and scheduled to your approval, but they are also delivered, unpacked, plated, and served to you with a cocktail by our beautiful Bunny Bells.\n Joining 'The Bachelor's Club' makes you part of an elite group of gentlemen enjoying this luxury experience while freeing up time to focus on other important matters. We learn your favorite foods, cocktails, and snacks to appeal to your appetite, aiming to gain your trust and loyalty through impeccable service and convenience, building a lasting relationship one bite at a time!",
  slides: [
    { img: SlideImg1, label: 'Sophia Jennings' },
    { img: SlideImg2, label: 'Sophia Jennings' },
    { img: SlideImg3, label: 'Sophia Jennings' },
  ],
};

export const OurTeam: React.FC = () => {
  const renderSliderNavigation = () => (
    <div className={styles.navigation}>
      <button
        id="delivery_team_prevElBtn"
        aria-label="previous slide"
        type="button"
        className={styles.navigationPrev}
      >
        <ArrowNavigationIcon />
      </button>

      <h2 className={styles.title}>{content.title}</h2>

      <button
        id="delivery_team_nextElBtn"
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
          <Swiper
            id="delivery_team-swiper"
            navigation={{
              prevEl: '#delivery_team_prevElBtn',
              nextEl: '#delivery_team_nextElBtn',
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

          <div className={styles.descriptionWrapper}>
            <Paragraph className={styles.description}>{content.description}</Paragraph>
          </div>

          <div className={styles.logoWrapper}>
            <Logo />
          </div>
        </div>
      </Container>
    </Section>
  );
};
