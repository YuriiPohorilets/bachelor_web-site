import { Container, Section } from '@/components/common';
import { Benefits } from '@/modules';
import { CrownIcon } from '@/assets/icons';

import styles from './Hero.module.scss';

const content = {
  title: ['Bachelor bunny', 'gourmet'],
  description: 'Delicious meals delivered to your door',
};

export const Hero: React.FC = () => {
  return (
    <Section shadow="bottom">
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <div className={styles.iconWrapper}>
                <CrownIcon />
              </div>

              <h1 className={styles.title}>
                {content.title[0]} <span>{content.title[1]}</span>
              </h1>
            </div>

            <p className={styles.description}>{content.description}</p>
          </div>

          <Benefits />
        </div>
      </Container>
    </Section>
  );
};
