export const animation = {
  fadeIn: (params: IOptions) => {
    const { delay = 0, duration = 0.8, amount = 0.5, once = false, ease = 'easeInOut' } = params;

    return {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once },
      transition: { duration, delay, amount, ease },
    };
  },
};

interface IOptions {
  once?: boolean;
  delay?: number;
  duration?: number;
  amount?: number;
  ease?: string;
}
