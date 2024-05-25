import { Container } from '@/components/common';

interface IProps extends React.PropsWithChildren {
  slider?: boolean;
}

export const Hero: React.FC<IProps> = ({ children, slider }) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};
