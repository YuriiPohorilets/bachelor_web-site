import classNames from 'classnames';

import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IProps> = ({ children }) => {
  return <button>{children}</button>;
};
