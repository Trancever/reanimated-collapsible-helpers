import React from 'react';
import type { LayoutChangeEvent } from 'react-native';

import { useSharedValue, withTiming } from 'react-native-reanimated';

import type { State, Config } from './types';

export function useCollapsible(config?: Config) {
  const [height, setHeight] = React.useState(0);
  const [state, setState] = React.useState<State>('collapsed');

  const animatedHeight = useSharedValue(0);

  React.useEffect(() => {
    if (state === 'collapsed') {
      animatedHeight.value = withTiming(0, config);
    } else {
      animatedHeight.value = withTiming(height, config);
    }
  }, [state, height, config, animatedHeight]);

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
