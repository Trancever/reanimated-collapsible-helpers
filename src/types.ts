import type { EasingFunction } from 'react-native-reanimated';

export type State = 'expanded' | 'collapsed';

export type Config = {
  duration?: number;
  easing?: EasingFunction;
};
