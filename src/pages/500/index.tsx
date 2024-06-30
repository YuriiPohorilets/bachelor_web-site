import Head from 'next/head';

import { Favicon } from '@/components/common';

const headContent = {
  title: '500 - Server-side error occurred',
  description: 'Server-side error occurred',
};

const Page500 = () => {
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

export default Page500;
