import Head from 'next/head';

import { Favicon } from '@/components/common';
import { About, Community, Hero, Menu, OurTeam, Story } from '@/scenes/AboutUs';
import { Footer } from '@/modules';
import { BgWrapper } from '@/components/misc';

import FooterBg from '@/assets/images/about/footer_bg.jpg';

const headContent = {
  title: 'About us - Bachelor Bunny Gourmet',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>

      <Hero />
      <About />
      <Story />
      <OurTeam />
      <BgWrapper imageUrl={FooterBg.src}>
        <Menu />
        <Community />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default AboutUsPage;
