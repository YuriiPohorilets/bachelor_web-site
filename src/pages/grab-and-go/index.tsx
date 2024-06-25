import { HeadPage } from '@/components/common';
import { Hero, Faq } from '@/scenes/GrabAndGo';

const headContent = {
  title: 'Grab & Go - Bachelor Bunny Gourmet',
  description:
    "Grab and go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go.",
};

const GrabAndGoPage = () => {
  return (
    <>
      <HeadPage title={headContent.title} description={headContent.description} />

      <Hero />
      <Faq />
    </>
  );
};

export default GrabAndGoPage;
