interface IProps extends React.PropsWithChildren {}

export const Dropdown: React.FC<IProps> = ({ children }) => {
  return <ul>{children}</ul>;
};
