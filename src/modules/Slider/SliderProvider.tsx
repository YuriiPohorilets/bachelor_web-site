import { createContext, useContext } from 'react';

export interface IConfig {
  delay: number;
  duration: number;
  effect: 'fade' | 'slide';
  autoplay?: boolean;
}

interface IContextProps {
  currentSlide: number;
  length: number;
  config: IConfig;
  controls: {
    nextSlide: () => void;
    prevSlide: () => void;
    changeSlide: (index: number) => void;
  };
}

export const SliderContext = createContext<IContextProps>(null!);

export const useSliderContext = () => {
  const props = useContext(SliderContext);

  if (!props) {
    throw new Error('Slider context not found!');
  }

  return props;
};
