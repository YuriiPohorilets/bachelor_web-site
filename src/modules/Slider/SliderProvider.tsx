import { createContext, useContext } from 'react';

interface IContextProps {
  currentSlide: number;
  config: {
    delay: number;
    duration: number; effect: 'fade' | 'slide'
  };
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
