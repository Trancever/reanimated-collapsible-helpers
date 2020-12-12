import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Accordion } from './Accordion';
import { Screen } from '../../Screen';
import { HEADING_FONT_SIZE } from '../../constants';
import { heading } from '../../colors';
import { MontserratBold } from '../../fonts';

const items = [
  {
    question: 'Why should I use this library',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros a nisi varius tristique. Integer sagittis vitae justo et suscipit. Nullam id vulputate tortor. Fusce vulputate nisi tellus, non consequat ipsum semper sed. Maecenas ut sollicitudin tellus. Donec risus purus, malesuada vel sagittis id, porta ac magna. In hac habitasse platea dictumst.',
  },
  {
    question: 'Why react-native-builder-bob is great',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros a nisi varius tristique. Integer sagittis vitae justo et suscipit. Nullam id vulputate tortor. Fusce vulputate nisi tellus, non consequat ipsum semper sed. Maecenas ut sollicitudin tellus. Donec risus purus, malesuada vel sagittis id, porta ac magna. In hac habitasse platea dictumst.',
  },
  {
    question: 'Why should I use reanimated over animated',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in eros a nisi varius tristique. Integer sagittis vitae justo et suscipit. Nullam id vulputate tortor. Fusce vulputate nisi tellus, non consequat ipsum semper sed. Maecenas ut sollicitudin tellus. Donec risus purus, malesuada vel sagittis id, porta ac magna. In hac habitasse platea dictumst.',
  },
];

export function Faq() {
  return (
    <Screen>
      <Text style={styles.heading}>FAQs</Text>
      {items.map(({ answer, question }) => (
        <View key={question} style={styles.accordionContainer}>
          <Accordion question={question} answer={answer} />
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: MontserratBold,
    color: heading,
    fontSize: HEADING_FONT_SIZE,
    marginBottom: 16,
  },
  accordionContainer: {
    marginVertical: 4,
  },
});
