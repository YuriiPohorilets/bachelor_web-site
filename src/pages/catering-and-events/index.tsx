import Head from 'next/head';

import { Favicon } from '@/components/common';
import { BgWrapper } from '@/components/misc';
import { Footer } from '@/modules';
import { About, Advantage, Clients, Faq, Hero } from '@/scenes/CateringAndEvents';

import HeroBg from '@/assets/images/catering/hero_bg.jpg';
import FooterBg from '@/assets/images/catering/footer_bg.jpg';

const headContent = {
  title: 'Catering & Events - Bachelor Bunny Gourmet',
  description:
    'Bachelor Bunny Gourmet brings an experience, not just food and seamless event management, to your male-themed events.',
};

const CateringAndEventsPage = () => {
  return (
    <>
      <Head>
        <title>{headContent.title}</title>
        <meta name="description" content={headContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>

      <BgWrapper imageUrl={HeroBg.src}>
        <Hero />
        <Advantage />
      </BgWrapper>
      <About />
      <BgWrapper imageUrl={FooterBg.src}>
        <Clients />
        <Faq />
        <Footer />
      </BgWrapper>
    </>
  );
};

export default CateringAndEventsPage;
