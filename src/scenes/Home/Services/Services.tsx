import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Slider } from '@/modules';

import styles from './Services.module.scss';

import SlideImg1 from '@/assets/images/home-page/services/slide-1.jpeg';
import SlideImg2 from '@/assets/images/home-page/services/slide-2.jpeg';
import SlideImg3 from '@/assets/images/home-page/services/slide-3.jpeg';

const content = {
  slider: [
    {
      id: 'slide-01',
      title: 'Grab & Go',
      description:
        'Your solution for busy days, with four gourmet meals delivered across two days.',
      img: SlideImg1,
    },
    {
      id: 'slide-02',
      title: 'In-Home Executive Delivery',
      description:
        'Luxury dining at home with beautiful Bunny Bells: delivery, cocktails, conversation.',
      img: SlideImg2,
    },
    {
      id: 'slide-03',
      title: 'Catering & Events',
      description: 'Elevate events with Bachelor Bunny Gourmet Catering, tailored for men.',
      img: SlideImg3,
    },
  ],
};

export const Services: React.FC = () => {
  return (
    <Section shadow="top">
      <h2 className="hidden">Services</h2>

      <Container>
        <div className={styles.wrapper}>
          <Slider
            fullWidth={true}
            pagination={true}
            length={content.slider.length}
            config={{
              effect: 'slide',
              delay: 5000,
              duration: 150,
              autoplay: true,
            }}
          >
            <Slider.Container>
              {content.slider.map((item, index) => (
                <Slider.Slide key={index} className={styles.slide}>
                  <Image
                    alt={item.description}
                    src={item.img}
                    width={1920}
                    height={1080}
                    className={styles.img}
                  />

                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </Slider.Slide>
              ))}
            </Slider.Container>

            <div className={styles.navigationWrapper}>
              <Slider.NavigationButton direction="prev" />
              <Slider.NavigationButton direction="next" />

              <span className={styles.label}>Our proposals</span>
            </div>
          </Slider>
        </div>
      </Container>
    </Section>
  );
};
