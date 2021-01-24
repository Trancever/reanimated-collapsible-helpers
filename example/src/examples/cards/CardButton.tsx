import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type Animated from 'react-native-reanimated';
import { Svg, Path, Defs, ClipPath } from 'react-native-svg';
import type { State } from 'reanimated-collapsible-helpers';

import { AnimatedChevron } from '../../shared/AnimatedChevron';
import type { Card } from '../../types';
import { black, heading, body, white } from '../../colors';
import { MontserratSemiBold, MontserratBold, OpenSans } from '../../fonts';

type Props = {
  height: number;
  animatedHeight: Animated.SharedValue<number>;
  onPress: () => void;
  card: Card;
  state: State;
};

export function CardButton({
  animatedHeight,
  onPress,
  height,
  card,
  state,
}: Props) {
  const expanded = state === 'expanded';

  const ratioOnMinus = card.ratio < 0;

  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={onPress}
        accessibilityRole="button"
        accessibilityState={{ expanded }}
        style={styles.button}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <View style={styles.icon}>{card.icon}</View>
            <View style={styles.currency}>
              <Text style={styles.currencyText}>{card.currency}</Text>
              <Text style={styles.shortcut}>{card.shortcut}</Text>
            </View>
            <View style={styles.chevronContainer}>
              <AnimatedChevron
                color="black"
                animatedHeight={animatedHeight}
                height={height}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <View accessible={false} style={StyleSheet.absoluteFillObject}>
          <Background color={card.color} />
        </View>
        <View style={styles.priceContainer}>
          <Text style={[styles.price, styles.whiteText]}>${card.price}</Text>
          <Text
            style={[
              styles.ratio,
              ratioOnMinus ? styles.orangeText : styles.blueText,
            ]}
          >
            {ratioOnMinus ? '-  ' : '+ '}
            {Math.abs(card.ratio)}%
          </Text>
        </View>
      </View>
    </View>
  );
}

const VIEW_BOX_SIZE = 10;
const CLIPPED_ELEMENT_WIDTH = VIEW_BOX_SIZE / 10;

function Background({ color }: { color: string }) {
  // ClipPath defines the visible part of the Path
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
    >
      <Defs>
        <ClipPath id="clipPath">
          <Path
            fill="white"
            d={`M0,0 L${VIEW_BOX_SIZE},0 L${VIEW_BOX_SIZE},${VIEW_BOX_SIZE} L${CLIPPED_ELEMENT_WIDTH},${VIEW_BOX_SIZE} Z`}
          />
        </ClipPath>
      </Defs>
      <Path
        d={`M0,0 L${VIEW_BOX_SIZE},0 L${VIEW_BOX_SIZE},${VIEW_BOX_SIZE} L0,${VIEW_BOX_SIZE} Z`}
        fill={color}
        clipPath="url(#clipPath)"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    elevation: 3,
    shadowColor: black,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
  },
  currency: {
    justifyContent: 'space-between',
  },
  currencyText: {
    fontFamily: MontserratSemiBold,
    fontSize: 18,
    color: heading,
  },
  shortcut: {
    fontFamily: OpenSans,
    fontSize: 14,
    color: body,
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingRight: 24,
    paddingLeft: 32,
  },
  chevronContainer: {
    paddingLeft: 16,
    justifyContent: 'center',
  },
  priceContainer: {
    justifyContent: 'center',
  },
  price: {
    fontFamily: MontserratBold,
    fontSize: 18,
  },
  ratio: {
    textAlign: 'right',
    fontFamily: MontserratSemiBold,
    fontSize: 15,
  },
  whiteText: {
    color: white,
  },
  blueText: {
    color: '#084bc9',
  },
  orangeText: {
    color: '#e2e627',
  },
});
