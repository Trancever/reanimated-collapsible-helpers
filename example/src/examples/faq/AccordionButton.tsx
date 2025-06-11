import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { SharedValue } from 'react-native-reanimated';

import { white, green } from '../../colors';
import { QUESTION_FONT_SIZE } from '../../constants';
import { MontserratSemiBold } from '../../fonts';
import { AnimatedChevron } from '../../shared/AnimatedChevron';

type Props = {
  question: string;
  onButtonPress: () => void;
  height: number;
  animatedHeight: SharedValue<number>;
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
    <TouchableOpacity
      onPress={onButtonPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
    >
      <View style={styles.container}>
        <Text style={styles.question}>{question}?</Text>
        <AnimatedChevron
          animatedHeight={animatedHeight}
          height={height}
          color="green"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 6,
  },
  question: {
    fontFamily: MontserratSemiBold,
    fontSize: QUESTION_FONT_SIZE,
    color: green,
    marginRight: 32,
  },
});
