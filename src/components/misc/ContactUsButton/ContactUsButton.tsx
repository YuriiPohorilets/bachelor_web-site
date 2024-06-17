import Link from 'next/link';
import classNames from 'classnames';

import { PagePathname } from '@/types';

import styles from './ContactUsButton.module.scss';
import { OutwardArrowIcon } from '@/assets/icons';

interface IProps {
  variant: 'contained' | 'outlined';
}

export const ContactUsButton: React.FC<IProps> = ({ variant }) => {
  return (
    <Link href={PagePathname.ContactUs} className={classNames(styles.link, styles[variant])}>
      <span className={styles.label}>Contact us</span>
      {variant === 'outlined' && (
        <span className={styles.icon}>
          <OutwardArrowIcon />
        </span>
      )}
    </Link>
  );
};
