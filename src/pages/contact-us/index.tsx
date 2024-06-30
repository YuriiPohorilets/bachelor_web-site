import Head from 'next/head';

import { Favicon } from '@/components/common';

const headContent = {
  title: 'Contact Us - Bachelor Bunny Gourmet',
  description:
    'Bachelor Bunnies, already equip with strong positive work ethic principals, are trained to excel in customer service, and maintain high moral throughout the entire experience.',
};

const ContactUsPage = () => {
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

export default ContactUsPage;
