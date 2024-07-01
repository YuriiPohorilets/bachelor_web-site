import { createContext, useContext } from 'react';

interface IContextProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const AccordionContext = createContext<IContextProps>(null!);

export const useAccordionContext = () => {
  const props = useContext(AccordionContext);

  if (!props) {
    throw new Error('Accordion context not found!');
  }

  return props;
};
