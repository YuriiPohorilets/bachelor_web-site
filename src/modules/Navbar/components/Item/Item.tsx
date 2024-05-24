import Link from 'next/link';

import { INavItem } from '@/constants/navigation';

import styles from './Item.module.scss';

interface IProps {
  item: INavItem;
  className?: string;
}

export const Item: React.FC<IProps> = ({ item, className }) => {
  return (
    <li>
      <Link href={item.link!} className={styles.link}>
        {item.label}
      </Link>
    </li>
  );
};
