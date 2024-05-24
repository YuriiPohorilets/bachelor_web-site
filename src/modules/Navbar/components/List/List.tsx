import { navigationList } from '@/constants/navigation';

interface IProps extends React.PropsWithChildren {}

export const List: React.FC<IProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
