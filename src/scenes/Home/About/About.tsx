import Image from 'next/image';

import { Container, Section } from '@/components/common';

import styles from './About.module.scss';

export const About: React.FC = () => {
  return (
    <Section shadow="both">
      <Container>
        <div className={styles.wrapper}></div>
      </Container>
    </Section>
  );
};
