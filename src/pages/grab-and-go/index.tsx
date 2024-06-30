import Head from 'next/head';

import { Favicon } from '@/components/common';

const headContent = {
  title: 'Grab & Go - Bachelor Bunny Gourmet',
  description:
    "Grab and go is our most popular offering, and the ideal solution for the dynamic man who's on-the-go.",
};

const GrabAndGoPage = () => {
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

export default GrabAndGoPage;
