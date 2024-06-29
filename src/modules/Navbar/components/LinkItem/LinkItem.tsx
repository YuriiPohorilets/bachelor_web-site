import Link from 'next/link';
import classNames from 'classnames';

import styles from './LinkItem.module.scss';

interface IProps {
  href: string;
  label: string;
  className?: string;
}

export const LinkItem: React.FC<IProps> = ({ label, href, className }) => {
  return (
    <Link href={href} className={classNames(styles.link, className)}>
      {label}
    </Link>
  );
};
