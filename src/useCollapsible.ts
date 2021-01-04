import React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import Animated from 'react-native-reanimated';

import { runTiming } from './reanimatedHelpers';
import type { State, Config } from './types';

const { Clock, Value } = Animated;

export function useCollapsible(config?: Config) {
  const [height, setHeight] = React.useState(0);
  const [state, setState] = React.useState<State>('collapsed');

  const { current: clock } = React.useRef(new Clock());
  const { current: progress } = React.useRef(new Value<number>(0));
  const { current: animation } = React.useRef(new Value<number>(0));
  const { current: animatedHeight } = React.useRef(
    runTiming(clock, progress, animation, config?.duration, config?.easing)
  );

  React.useEffect(() => {
    if (state === 'collapsed') {
      animation.setValue(0);
    } else {
      animation.setValue(height);
    }
  }, [state, height, animation]);

  const onPress = React.useCallback(() => {
    setState((prev) => (prev === 'collapsed' ? 'expanded' : 'collapsed'));
  }, []);

  const onLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      const measuredHeight = event.nativeEvent.layout.height;

      if (height !== measuredHeight) {
        setHeight(measuredHeight);
      }
    },
    [height]
  );

  return {
    onLayout,
    onPress,
    animatedHeight,
    height,
    state,
  };
}
