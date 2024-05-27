interface IProps extends React.PropsWithChildren {}

export const VisuallyHidden: React.FC<IProps> = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        margin: '-1px',
        padding: 0,
        width: '1px',
        height: '1px',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        border: 0,
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(100%)',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};
