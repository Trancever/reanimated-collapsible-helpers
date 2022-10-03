import type Animated from 'react-native-reanimated';

export type State = 'expanded' | 'collapsed';

export type Config = {
  duration?: number;
  easing?: Animated.EasingNodeFunction;
};
