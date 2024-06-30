import Head from 'next/head';

import { Favicon } from '@/components/common';

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
    </>
  );
};

export default DeliveryPage;
