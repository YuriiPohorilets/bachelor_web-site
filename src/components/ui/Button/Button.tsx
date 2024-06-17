import classNames from 'classnames';

import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'accent' | 'light';
}

export const Button: React.FC<IProps> = ({ children, color, type, disabled, onClick }) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classNames(styles.btn, styles[color])}>
      {children}
    </button>
  );
};
