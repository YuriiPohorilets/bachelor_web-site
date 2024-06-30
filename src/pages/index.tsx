import Head from 'next/head';

import { Favicon } from '@/components/common';
import {
  About,
  Hero,
  Services,
  ServiceGrabAndGo,
  ServiceDelivery,
  ServiceCatering,
  Advantage,
  Community,
} from '@/scenes/Home';
import { BgWrapper } from '@/components/misc';

import FooterImg from '@/assets/images/home/footer_bg.jpg';
import { Clients } from '@/scenes/Home/Clients';
import { Footer } from '@/modules';

// import { GetStaticProps, GetStaticPaths } from 'next';
// import { getPosts } from '@/services/service';

const headContent = {
  title: 'Home - Bachelor Bunny Gourmet',
  description: 'Delicious meals delivered to your door',
};

const HomePage = ({ posts }: { posts: any }) => {
  console.log(posts);

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
      <Services />
      <ServiceGrabAndGo />
      <ServiceDelivery />
      <ServiceCatering />
      <Advantage />
      <Clients />

      <BgWrapper imageUrl={FooterImg.src}>
        <Community />
        <Footer />
      </BgWrapper>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts(10);

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 3600,
//   };
// };

export default HomePage;
