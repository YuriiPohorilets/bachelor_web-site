import classNames from 'classnames';

import styles from './Section.module.scss';

interface IProps extends React.PropsWithChildren {
  containerRef?: React.RefObject<HTMLElement>;
  className?: string;
}

export const Section: React.FC<IProps> = ({ children, className, containerRef }) => {
  return (
    <section className={classNames(styles.section, className)} ref={containerRef}>
      {children}
    </section>
  );
};
