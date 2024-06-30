import Head from 'next/head';

import { Favicon } from '@/components/common';

const headContent = {
  title: '404 - Page Not Found',
  description: 'Page Not Found',
};

const Page404 = () => {
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

export default Page404;
