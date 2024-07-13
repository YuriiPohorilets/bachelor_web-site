import Head from 'next/head';

import { Container, Favicon, Section } from '@/components/common';
import { Address, ContactForm, Social } from '@/modules';

import styles from './index.module.scss';

const headContent = {
  title: 'Contact Us - Bachelor Bunny Gourmet',
  description:
    'Bachelor Bunnies, already equip with strong positive work ethic principals, are trained to excel in customer service, and maintain high moral throughout the entire experience.',
};

const content = {
  title: 'Contact Us',
  description:
    'Bachelor Bunnies, already equip with strong positive work ethic principals, are trained to excel in customer service, and maintain high moral throughout the entire experience. \nContact us to see what we have available.',
  label:
    'We deliver to Las Vegas and Surrounding Areas. \nContact us to confirm your location is within our range.',
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

      <Section className={styles.section}>
        <Container className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.socialWrapper}>
              <Social variant="icon" />
            </div>

            <div className={styles.contentWrapper}>
              <h1 className={styles.title}>{content.title}</h1>

              <div className={styles.content}>
                <p className={styles.description}>{content.description}</p>

                <div className={styles.addressWrapper}>
                  <p className={styles.label}>{content.label}</p>
                  <Address icon direction="row" />
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactUsPage;
