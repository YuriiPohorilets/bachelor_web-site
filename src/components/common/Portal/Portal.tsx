import { createPortal } from 'react-dom';

interface IProps extends React.PropsWithChildren {
  target: string;
}

export const Portal: React.FC<IProps> = ({ target, children }) => {
  return createPortal(children, document.getElementById(target)!);
};
