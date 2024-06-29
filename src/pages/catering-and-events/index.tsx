import Head from 'next/head';

import { Favicon } from '@/components/common';

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
    </>
  );
};

export default CateringAndEventsPage;
