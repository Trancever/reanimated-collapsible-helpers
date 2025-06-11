import React from 'react';

import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

export function AnimatedChevron({
  animatedHeight,
  height,
  color,
}: {
  animatedHeight: SharedValue<number>;
  height: number;
  color: string;
}) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${interpolate(
          animatedHeight.value,
          [0, height],
          [90, -90],
          Extrapolation.CLAMP
        )}deg`,
      },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
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
