import React from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import type { State } from './types';

type Props = {
  children: React.ReactNode;
  onLayout: (event: LayoutChangeEvent) => void;
  animatedHeight: Animated.SharedValue<number>;
  state: State;
  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
};

export function AnimatedSection({
  children,
  onLayout,
  animatedHeight,
  state,
  style,
}: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  });

  return (
    <Animated.View
      style={[animatedStyle, styles.overflowHidden]}
      pointerEvents={state === 'expanded' ? 'auto' : 'none'}
    >
      <Animated.View onLayout={onLayout} style={[styles.container, style]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overflowHidden: {
    overflow: 'hidden',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
