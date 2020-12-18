import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export function Screen({ children }: Props) {
  return (
    <View style={styles.screen}>
      <View style={[styles.content]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    padding: 16,
    maxWidth: 500,
    width: '100%',
  },
});
