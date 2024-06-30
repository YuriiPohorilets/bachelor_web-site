import { StarIcon } from '@/assets/icons';

import styles from './Rating.module.scss';

interface IProps {
  rating: number;
}

export const Rating: React.FC<IProps> = ({ rating }) => {
  const getRatingArray = (rating: number) => {
    const result: number[] = [];
    const wholePart = Math.floor(rating);
    const fractionalPart = rating % 1;

    for (let i = 0; i < 5; i += 1) {
      if (i < wholePart) {
        result.push(1);
      } else if (i === wholePart && fractionalPart > 0) {
        result.push(fractionalPart);
      } else {
        result.push(0);
      }
    }

    return result;
  };

  return (
    <ul className={styles.list}>
      {getRatingArray(rating).map((item, index) => (
        <li key={index} className={styles.item}>
          <StarIcon key={index} offset={item} />
        </li>
      ))}
    </ul>
  );
};
