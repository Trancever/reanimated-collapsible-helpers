import Animated, { EasingNode } from 'react-native-reanimated';

const {
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  stopClock,
  block,
} = Animated;

export function runTiming(
  clock: Animated.Clock,
  value: Animated.Value<number>,
  dest: Animated.Value<number>,
  duration: number = 250,
  easing: Animated.EasingNodeFunction = EasingNode.out(EasingNode.ease)
) {
  const state = {
    finished: new Value(0),
    position: value,
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: dest,
    easing,
  };

  return block([
    cond(clockRunning(clock), 0, [
      // If the clock isn't running we reset all the animation params and start the clock
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, stopClock(clock)),
    // return the updated position
    state.position,
  ]);
}
