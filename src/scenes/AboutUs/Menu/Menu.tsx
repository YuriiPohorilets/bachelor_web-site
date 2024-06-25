import Image from 'next/image';

import { Container, Section } from '@/components/common';
import { Card, Carousel } from '@/modules';
import Img from '@/assets/images/about-page/menu/img.jpg';

import styles from './Menu.module.scss';

const content = [
  { id: 'menu-01', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-02', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-03', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-04', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-05', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-06', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-07', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-08', name: 'Label', description: 'Description', img: Img },
  { id: 'menu-09', name: 'Label', description: 'Description', img: Img },
];

export const Menu: React.FC = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Our menu</h2>

          <Carousel>
            {content.map(({ id, name, description, img }) => (
              <Card key={id} className={styles.card}>
                <Image alt={name} src={img} width={434} height={434} className={styles.img} />

                <div className={styles.contentWrapper}>
                  <div className={styles.labelWrapper}>
                    <Card.Label label={name} />
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
