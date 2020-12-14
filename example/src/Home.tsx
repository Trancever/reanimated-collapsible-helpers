import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { StackNavigationProp } from '@react-navigation/stack';

import { white, lightGrey, blue, lightPurple } from './colors';
import { ICON_SIZE } from './constants';
import type { StackParamList } from './types';

const examples: Array<{
  name: keyof StackParamList;
  label: string;
  icon: string;
  color: string;
}> = [
  {
    name: 'FAQ',
    icon: 'frequently-asked-questions',
    label: 'FAQ',
    color: blue,
  },
  {
    name: 'Cards',
    icon: 'card-text-outline',
    label: 'Cards',
    color: lightPurple,
  },
];

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

export function Home({ navigation }: Props) {
  return (
    <View>
      {examples.map(({ name, label, icon, color }) => (
        <TouchableOpacity key={name} onPress={() => navigation.navigate(name)}>
          <View style={styles.buttonInnerContainer}>
            <MaterialCommunityIcons
              style={styles.iconStyle}
              name={icon}
              color={color}
              size={ICON_SIZE}
            />
            <Text style={styles.labelStyle}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: white,
    borderBottomColor: lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconStyle: {
    marginRight: 20,
  },
  labelStyle: {
    fontSize: 18,
  },
});
