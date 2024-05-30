import { HeadPage } from '@/components/common';
import { About, Hero } from '@/scenes/Home';

const headContent = {
  title: 'Home - Bachelor Bunny Gourmet',
  description: 'Delicious meals delivered to your door',
};

const HomePage = () => {
  return (
    <>
      <HeadPage title={headContent.title} description={headContent.description} />

      <Hero />
      <About />
    </>
  );
};

export default HomePage;
