import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Card } from './Card';
import { heading } from '../../colors';
import {
  HEADING_FONT_SIZE,
  SUBHEADING_FONT_SIZE,
  CURRENT_FONT_SIZE,
} from '../../constants';
import { MontserratBold, MontserratSemiBold } from '../../fonts';
import { Bitcoin } from '../../icons/Bitcoin';
import { Ethereum } from '../../icons/Ethereum';
import { Screen } from '../../Screen';

const cards = [
  {
    icon: <Bitcoin />,
    currency: 'Bitcoin',
    shortcut: 'BTC',
    color: '#f59d31',
    price: '6,532.00',
    ratio: 15.2,
  },
  {
    icon: <Ethereum />,
    currency: 'Ethereum',
    shortcut: 'ETH',
    color: '#637eea',
    price: '1,278.00',
    ratio: -5.3,
  },
];

export function Cards() {
  return (
    <ScrollView>
      <Screen>
        <Text style={styles.subHeading}>My balance</Text>
        <Text style={styles.heading}>
          <Text style={styles.small}>$</Text>2,657.25
        </Text>
        {cards.map((props) => (
          <View key={props.currency} style={styles.accordionContainer}>
            <Card card={props} />
          </View>
        ))}
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: MontserratBold,
    color: heading,
    fontSize: HEADING_FONT_SIZE,
    marginBottom: 16,
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: MontserratSemiBold,
    color: heading,
    fontSize: SUBHEADING_FONT_SIZE,
    marginBottom: 16,
    textAlign: 'center',
  },
  small: {
    fontSize: CURRENT_FONT_SIZE,
  },
  accordionContainer: {
    marginVertical: 4,
  },
});
