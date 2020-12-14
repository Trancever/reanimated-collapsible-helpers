import React from 'react';
import { LayoutChangeEvent, StyleSheet } from 'react-native';
import Animated, { Extrapolate } from 'react-native-reanimated';

const { interpolate } = Animated;

type Props = {
  children: React.ReactNode;
  onLayout: (event: LayoutChangeEvent) => void;
  animatedHeight: Animated.Node<number>;
  height: number;
};

export function AnimatedAccordionSection({
  children,
  onLayout,
  animatedHeight,
  height,
}: Props) {
  /*
   * Accordion section animation consists of few separate animations:
   * 1. We Have a wrapping view (Container) that animates it's height from 0 to x (x is measuered with onLayout)
   * 2. Container have a child - an absolutely positioned View with a property "top" set to 0.
   *    Thanks to that, when container height changes (animation runs), the absolutely positioned view appears.
   *    This approach lets us avoid situation where text is jumping, because it's height is being directly animated.
   * 3. Opacity - we animate from 0 to 1 when expanding just to make the animation more smooth.
   * 4. TranslateY - we animate from -15px to -5px when expanding just to make nice visual effect.
   */
  return (
    <Animated.View style={[{ height: animatedHeight }]}>
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.container,
          {
            opacity: interpolate(animatedHeight, {
              inputRange: [0, height],
              outputRange: [0, 1],
              extrapolate: Extrapolate.CLAMP,
            }),
            transform: [
              {
                translateY: interpolate(animatedHeight, {
                  inputRange: [0, height],
                  outputRange: [-15, -5],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          },
        ]}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
