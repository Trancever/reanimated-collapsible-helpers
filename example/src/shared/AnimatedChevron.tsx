import React from 'react';
import Animated, { Extrapolate } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const { interpolate, concat } = Animated;

export function AnimatedChevron({
  animatedHeight,
  height,
  color,
}: {
  animatedHeight: Animated.Node<number>;
  height: number;
  color: string;
}) {
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              rotateZ: concat(
                interpolate(animatedHeight, {
                  inputRange: [0, height],
                  outputRange: [90, -90],
                  extrapolate: Extrapolate.CLAMP,
                }),
                'deg'
              ),
            },
          ],
        },
      ]}
    >
      <Svg width="12" height="19.2" viewBox="0 0 10 16">
        <Path
          fill="none"
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M2 2l6 6-6 6"
        />
      </Svg>
    </Animated.View>
  );
}
