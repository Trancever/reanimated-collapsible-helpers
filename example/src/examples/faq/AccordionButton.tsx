import React from 'react';
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import type Animated from 'react-native-reanimated';

import { white, green } from '../../colors';
import { QUESTION_FONT_SIZE } from '../../constants';
import { MontserratSemiBold } from '../../fonts';

type Props = {
  question: string;
  onButtonPress: () => void;
  height: number;
  animatedHeight: Animated.Node<number>;
  expanded: boolean;
};

export function AccordionButton({
  question,
  animatedHeight,
  onButtonPress,
  height,
  expanded,
}: Props) {
  return (
    <TouchableWithoutFeedback
      onPress={onButtonPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
    >
      <View style={styles.container}>
        <Text style={styles.question}>{question}?</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  question: {
    fontFamily: MontserratSemiBold,
    fontSize: QUESTION_FONT_SIZE,
    color: green,
  },
});
