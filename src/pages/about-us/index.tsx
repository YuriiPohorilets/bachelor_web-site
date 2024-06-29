import Head from 'next/head';

import { Favicon } from '@/components/common';

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
    </>
  );
};

export default AboutUsPage;
