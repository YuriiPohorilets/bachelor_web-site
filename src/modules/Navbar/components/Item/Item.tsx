import Link from 'next/link';
import classNames from 'classnames';

import { INavItem } from '@/constants/navigation';

import styles from './Item.module.scss';

interface IProps extends React.PropsWithChildren {
  item: INavItem;
  dropdown?: boolean;
  className?: string;
}

export const Item: React.FC<IProps> = ({ children, item, dropdown = false, className }) => {
  return (
    <li>
      <Link href={item.link!} className={classNames(styles.link, className)}>
        {item.label}
        {children}
        {dropdown}
      </Link>
    </li>
  );
};
