import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import { interpolateNode, Extrapolate } from 'react-native-reanimated';
import {
  useCollapsible,
  AnimatedSection,
} from 'reanimated-collapsible-helpers';

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
  const { animatedHeight, height, onPress, onLayout, state } = useCollapsible();

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
        <AnimatedSection
          animatedHeight={animatedHeight}
          onLayout={onLayout}
          state={state}
          style={{
            opacity: interpolateNode(animatedHeight, {
              inputRange: [0, height],
              outputRange: [0, 1],
              extrapolate: Extrapolate.CLAMP,
            }),
            transform: [
              {
                translateY: interpolateNode(animatedHeight, {
                  inputRange: [0, height],
                  outputRange: [-15, -5],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
          <View style={styles.answerContainer}>
            <Text style={styles.answer}>{answer}</Text>
          </View>
        </AnimatedSection>
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
