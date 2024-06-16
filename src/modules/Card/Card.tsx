import classNames from 'classnames';

import { Description, Label, Rating } from '@/modules/Card/components';

import styles from './Card.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const CardComponent: React.FC<IProps> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export const Card = Object.assign(CardComponent, {
  Label,
  Description,
  Rating,
});
