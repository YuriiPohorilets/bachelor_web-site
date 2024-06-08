import Image from 'next/image';

import { Container, Section } from '@/components/common';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <>
      <Section shadow="bottom">
        <Container>
          <div className={styles.wrapper}></div>
        </Container>
      </Section>
    </>
  );
};
