import Head from 'next/head';

import { Favicon } from '@/components/common';
import { About, Advantage, Faq, Hero, OurTeam } from '@/scenes/Delivery';
import { BgWrapper } from '@/components/misc';

import HeroBgImg from '@/assets/images/delivery/hero_bg.jpg';
import FooterBgImg from '@/assets/images/delivery/footer_bg.png';
import { Footer } from '@/modules';

const headContent = {
  title: 'In-Home Executive Delivery - Bachelor Bunny Gourmet',
  description:
    'An elevated dining experience brings luxury dining directly to your door, where an attractive Bunny Belle systematically engages in light conversation as she plates your pre-cooked dinner meal, and pours a meal-paired cocktail.',
};

const DeliveryPage = () => {
  return (
    <>
      <Head>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>

      <BgWrapper imageUrl={HeroBgImg.src}>
        <Hero />
        <Advantage />
      </BgWrapper>
      <About />
      <BgWrapper imageUrl={FooterBgImg.src}>
        <OurTeam />
        <Faq />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default DeliveryPage;
