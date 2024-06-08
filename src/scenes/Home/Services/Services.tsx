import Image from 'next/image';

import { Container, Section } from '@/components/common';

import styles from './Services.module.scss';

export const Services: React.FC = () => {
  return (
    <Section shadow="top">
      <Container>
        <div className={styles.wrapper}></div>
      </Container>
    </Section>
  );
};
