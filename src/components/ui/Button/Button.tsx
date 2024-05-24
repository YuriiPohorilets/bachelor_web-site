import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant: 'contained' | 'outlined' | 'transparent';
  color: 'accent' | 'light' | 'dark';
}

export const Button: React.FC<IProps> = ({ onClick, type, href }) => {
  return <button type="button"></button>;
};
