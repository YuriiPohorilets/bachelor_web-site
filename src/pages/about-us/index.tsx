import { HeadPage } from '@/components/common';
import { BackgroundWrapper } from '@/components/misc';
import { Footer } from '@/modules';
import { Hero } from '@/scenes/AboutUs';

const headContent = {
  title: 'About us - Bachelor Bunny Gourmet',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

const AboutUsPage = () => {
  return (
    <>
      <HeadPage title={headContent.title} description={headContent.description} />

      <Hero />

      <BackgroundWrapper bgUrl={''}>
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default AboutUsPage;
