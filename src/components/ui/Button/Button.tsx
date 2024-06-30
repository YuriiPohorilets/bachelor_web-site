import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface BaseProps extends React.PropsWithChildren {
  as?: 'button' | 'a';
  className?: string;
}

interface ButtonProps extends BaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
}

interface AnchorProps extends BaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'a';
}

type IProps = ButtonProps | AnchorProps;

export const Button: React.FC<IProps> = ({ as = 'button', children, ...props }) => {
  const className = classNames(styles.btn, classNames);

  if (as === 'button') {
    return (
      <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={className}>
        {children}
      </button>
    );
  } else {
    return (
      <a
        target="_blank"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={className}
      >
        {children}
      </a>
    );
  }
};
