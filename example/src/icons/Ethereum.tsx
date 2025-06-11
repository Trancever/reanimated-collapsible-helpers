import React from 'react';
import { View, StyleSheet } from 'react-native';

import Svg, { G, Polygon } from 'react-native-svg';

export function Ethereum() {
  return (
    <View style={styles.container}>
      <Svg
        width="26px"
        height="26px"
        viewBox="0 0 256 417"
        preserveAspectRatio="xMidYMid"
      >
        <G>
          <Polygon
            fill="#ffffff"
            points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
          />
          <Polygon
            fill="#ffffff"
            points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
          />
          <Polygon
            fill="#ffffff"
            points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
          />
          <Polygon
            fill="#ffffff"
            points="127.962 416.9052 127.962 312.1852 0 236.5852"
          />
          <Polygon
            fill="#ffffff"
            points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
          />
          <Polygon
            fill="#ffffff"
            points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#637eea',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
