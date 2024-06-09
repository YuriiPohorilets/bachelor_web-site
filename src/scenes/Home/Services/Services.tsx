import Image from 'next/image';

import { Container, Section } from '@/components/common';

import styles from './Services.module.scss';
import { Slider } from '@/modules';
import { delay } from 'framer-motion';

import img1 from '@/assets/images/home-page/hero/slide-1.jpg';
import img2 from '@/assets/images/home-page/hero/slide-2.jpg';

const imgs = [
  { id: 0, img: img1 },
  { id: 1, img: img2 },
];

export const Services: React.FC = () => {
  return (
    <Section shadow="top">
      <Container>
        <div className={styles.wrapper}>
          <Slider
            fullWidth={false}
            pagination={true}
            config={{ delay: 400, duration: 800, effect: 'fade' }}
          >
            {imgs.map(item => (
              <Slider.Slide key={item.id}>
                <Image alt="" src={item.img} width={1920} height={1080} />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};
