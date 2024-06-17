import Image from 'next/image';

import { Card, Carousel } from '@/modules';
import { Container, Section } from '@/components/common';
import Img from '@/assets/images/home-page/hero/slide-1.jpg';

import styles from './OurClients.module.scss';

const content = [
  {
    id: '01',
    name: 'Jason',
    description: 'Graduation Party - a true feast of taste !!!!',
    img: Img,
    rating: 4.5,
  },
  {
    id: '02',
    name: 'Tyler',
    description: 'Los Angeles Themed Party - gourmet treats and impeccable staff:) ',
    img: Img,
    rating: 4,
  },
  {
    id: '03',
    name: 'Michael',
    description: 'Los Angeles Birthday Bash - exquisite food and fantastic ambiance!',
    img: Img,
    rating: 3.4,
  },
  {
    id: '04',
    name: 'Brandon',
    description: 'Los Angeles Party - unforgettable menu and top-notch service!',
    img: Img,
    rating: 5,
  },
  {
    id: '05',
    name: 'Brian',
    description: 'Chicago Bachelor Bash - Delicious dishes and incredible beauties Bells!',
    img: Img,
    rating: 4.5,
  },
];

export const OurClients: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Our clients</h2>

          <Carousel>
            {content.map(({ id, name, description, img, rating }) => (
              <Card key={id} className={styles.card}>
                <Image alt={name} src={img} width={434} height={434} className={styles.img} />

                <div className={styles.contentWrapper}>
                  <div className={styles.labelWrapper}>
                    <Card.Label label={name} />
                    <Card.Rating rating={rating} />
                  </div>

                  <Card.Description description={description} />
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
};
