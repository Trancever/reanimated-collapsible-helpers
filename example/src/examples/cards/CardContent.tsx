import React from 'react';
import { View, StyleSheet, LayoutChangeEvent, Platform } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import { OpenSans } from '../../fonts';

type Props = { color: string };

export function CardContent({ color }: Props) {
  const [data, setData] = React.useState<Array<{ data: number[] }> | null>(
    null
  );
  const [width, setWidth] = React.useState<number | null>(null);

  React.useEffect(() => {
    setData([
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ]);
  }, []);

  const onLayout = React.useCallback((event: LayoutChangeEvent) => {
    const measuredWidth = event.nativeEvent.layout.width;

    setWidth(measuredWidth);
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      {data && width ? (
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: data,
          }}
          width={width}
          height={196}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: () => color,
            propsForVerticalLabels: {
              fontFamily: Platform.OS === 'ios' ? undefined : OpenSans,
            },
            propsForHorizontalLabels: {
              fontFamily: Platform.OS === 'ios' ? undefined : OpenSans,
            },
          }}
          bezier
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 32,
    marginRight: 16,
  },
});
