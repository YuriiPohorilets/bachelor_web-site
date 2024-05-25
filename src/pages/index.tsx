import { Slider } from '@/modules';
import { Hero } from '@/scenes';
import Image from 'next/image';

import img1 from '@/assets/images/home-page/hero/slide-1.jpg';
import img2 from '@/assets/images/home-page/hero/slide-2.jpg';

const HomePage = () => {
  return (
    <Hero>
      <Slider delay={5000} duration={2} effect="fade">
        <Slider.Container>
          <Slider.Slide>
            <Image alt="" src={img1} />
          </Slider.Slide>

          <Slider.Slide>
            <Image alt="" src={img2} />
          </Slider.Slide>
        </Slider.Container>
      </Slider>
    </Hero>
  );
};

export default HomePage;
