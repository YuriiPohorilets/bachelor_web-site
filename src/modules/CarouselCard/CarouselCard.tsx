import classNames from 'classnames';

import { ImageWrapper } from './components/ImageWrapper/ImageWrapper';
import { Label } from './components/Label/Label';
import { Description } from './components/Description/Description';
import { Rating } from './components/Rating/Rating';

import styles from './CarouselCard.module.scss';

interface IProps extends React.PropsWithChildren {
  className?: string;
}

const CarouselCardModule: React.FC<IProps> = ({ children, className }) => {
  return <div className={classNames(styles.wrapper, className)}>{children}</div>;
};

export const CarouselCard = Object.assign(CarouselCardModule, {
  Label,
  Description,
  Rating,
  ImageWrapper,
});
