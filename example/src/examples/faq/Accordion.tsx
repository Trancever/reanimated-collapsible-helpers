import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import { useAccordionAnimation } from 'reanimated-accordion-helpers';

import { AnimatedAccordionSection } from '../../shared/AnimatedAccordionSection';
import { AccordionButton } from './AccordionButton';
import { lightGrey, white, body, black } from '../../colors';
import { ANSWER_FONT_SIZE } from '../../constants';
import { OpenSans } from '../../fonts';

type Props = {
  question: string;
  answer: string;
  style?: StyleProp<ViewStyle>;
};

export function Accordion({ question, answer, style }: Props) {
  const {
    animatedHeight,
    height,
    onPress,
    onLayout,
    state,
  } = useAccordionAnimation();

  return (
    <View style={styles.shadow}>
      <View style={[styles.container, style]}>
        <AccordionButton
          height={height}
          animatedHeight={animatedHeight}
          onButtonPress={onPress}
          question={question}
          expanded={state === 'expanded'}
        />
        <AnimatedAccordionSection
          animatedHeight={animatedHeight}
          height={height}
          onLayout={onLayout}
          state={state}
        >
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>{answer}</Text>
          </View>
        </AnimatedAccordionSection>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: black,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 1,
    shadowOpacity: 0.05,
    elevation: 2,
  },
  container: {
    backgroundColor: white,
    overflow: 'hidden',
    borderRadius: 6,
  },
  content: {
    borderBottomWidth: 1,
    borderBottomColor: lightGrey,
  },
  answerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  answer: {
    fontFamily: OpenSans,
    fontSize: ANSWER_FONT_SIZE,
    color: body,
    lineHeight: 20,
  },
});
