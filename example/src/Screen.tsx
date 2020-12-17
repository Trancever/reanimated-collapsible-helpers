import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

type Props = {
  children: React.ReactNode;
};

const width = Dimensions.get('window').width;

export function Screen({ children }: Props) {
  const [screenWidth, setScreenWidth] = React.useState(width);

  React.useEffect(() => {
    function onChange({ window }: { window: { width: number } }) {
      setScreenWidth(window.width);
    }

    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={[styles.content, { width: screenWidth }]}>{children}</View>
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
  },
});
