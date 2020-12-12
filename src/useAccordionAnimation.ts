import React from 'react';
import type { LayoutChangeEvent } from 'react-native';
import Animated from 'react-native-reanimated';

import { runTiming } from './reanimatedHelpers';
import type { State } from './types';

const { Clock, Value } = Animated;

export function useAccordionAnimation(onToggle?: (state: State) => void) {
  const [height, setHeight] = React.useState(0);
  const [state, setState] = React.useState<State>('collapsed');

  const { current: clock } = React.useRef(new Clock());
  const { current: progress } = React.useRef(new Value<number>(0));
  const { current: animation } = React.useRef(new Value<number>(0));
  const { current: animatedHeight } = React.useRef(
    runTiming(clock, progress, animation)
  );

  const onPress = React.useCallback(() => {
    if (state === 'collapsed') {
      animation.setValue(height);
      setState('expanded');
      onToggle?.('expanded');
    } else {
      animation.setValue(0);
      setState('collapsed');
      onToggle?.('collapsed');
    }
  }, [animation, height, onToggle, state]);

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
