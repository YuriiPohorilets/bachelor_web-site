// import { GetStaticProps, GetStaticPaths } from 'next';
// import { getPosts } from '@/services/service';

import { HeadPage } from '@/components/common';
import { Footer } from '@/modules';
import { BackgroundWrapper } from '@/components/misc';
import {
  Hero,
  About,
  Services,
  ServiceGrabAndGo,
  ServiceDelivery,
  ServiceEvents,
  Advantage,
  OurClients,
  Community,
} from '@/scenes/Home';

import AboutBgImg from '@/assets/images/home-page/about/bg.jpg';
import FooterBgImg from '@/assets/images/home-page/footer-bg.jpg';

const headContent = {
  title: 'Home - Bachelor Bunny Gourmet',
  description: 'Delicious meals delivered to your door',
};

const HomePage = ({ posts }: { posts: any }) => {
  console.log(posts);

  return (
    <>
      <HeadPage title={headContent.title} description={headContent.description} />

      <Hero />
      <BackgroundWrapper bgUrl={AboutBgImg.src}>
        <About />
      </BackgroundWrapper>
      <Services />
      <ServiceGrabAndGo />
      <ServiceDelivery />
      <ServiceEvents />
      <Advantage />
      <OurClients />
      <BackgroundWrapper bgUrl={FooterBgImg.src}>
        <Community />
        <Footer />
      </BackgroundWrapper>
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
