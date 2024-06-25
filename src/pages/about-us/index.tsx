import { HeadPage } from '@/components/common';
import { BackgroundWrapper } from '@/components/misc';
import { Footer } from '@/modules';
import { Hero, About, Story, OurTeam, Menu, Community } from '@/scenes/AboutUs';

import BgImg from '@/assets/images/about-page/bg.jpg';

const headContent = {
  title: 'About us - Bachelor Bunny Gourmet',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

const AboutUsPage = () => {
  return (
    <>
      <HeadPage title={headContent.title} description={headContent.description} />

      <Hero />
      <About />
      <Story />
      <OurTeam />

      <BackgroundWrapper bgUrl={BgImg.src}>
        <Menu />
        <Community />
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default AboutUsPage;
