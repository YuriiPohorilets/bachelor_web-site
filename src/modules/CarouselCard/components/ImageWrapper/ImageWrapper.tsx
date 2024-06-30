import { ImageProps } from 'next/image';
import classNames from 'classnames';

import Image from 'next/image';

import styles from './ImageWrapper.module.scss';

interface IProps extends ImageProps {
  className?: string;
}

export const ImageWrapper: React.FC<IProps> = ({
  src,
  alt,
  width = 1000,
  height = 1000,
  priority = false,
  placeholder = 'blur',
  className,
}) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      priority={priority}
      placeholder={placeholder}
      className={classNames(styles.img, className)}
    />
  );
};
