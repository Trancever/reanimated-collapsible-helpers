import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useAccordionAnimation } from 'reanimated-accordion-helpers';

import { AnimatedAccordionSection } from '../../shared/AnimatedAccordionSection';
import { CardButton } from './CardButton';
import { CardContent } from './CardContent';

import { white, black } from '../../colors';
import type { Card as CardType } from '../../types';

type Props = {
  card: CardType;
};

export function Card({ card }: Props) {
  const {
    animatedHeight,
    height,
    onPress,
    onLayout,
    state,
  } = useAccordionAnimation();

  return (
    <View style={[styles.card, styles.borderRadius]}>
      <View style={[styles.overflowHidden, styles.borderRadius]}>
        <CardButton
          height={height}
          animatedHeight={animatedHeight}
          onPress={onPress}
          state={state}
          card={card}
        />
        <AnimatedAccordionSection
          height={height}
          animatedHeight={animatedHeight}
          onLayout={onLayout}
          state={state}
        >
          <CardContent color={card.color} />
        </AnimatedAccordionSection>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    elevation: 3,
    shadowColor: black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    backgroundColor: white,
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  borderRadius: {
    borderRadius: 8,
  },
});
