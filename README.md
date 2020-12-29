# reanimated-collapsible-helpers

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

A cross-platform smooth expand/collapse animation helpers for React Native.

- [Run the example app to see it in action](https://expo.io/@trensik/projects/reanimated-collapsible-helpers-example).
- Checkout the [example/](https://github.com/Trancever/reanimated-collapsible-helpers/tree/main/example) directory for source code.

## Features

- Smooth animations
- Headless UI
- Cross-platform (iOS, Android, Web)
- Highly customizable
- Fully typed with [TypeScript](https://typescriptlang.org)

## Installation

Open a Terminal in the project root and run:

```sh
npm install reanimated-collapsible-helpers
```

or

```sh
yarn add reanimated-collapsible-helpers
```

Now we need to install [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated).

If you are using Expo, to ensure that you get the compatible versions of the libraries, run:

```sh
expo install react-native-reanimated
```

If you are not using Expo, run the following:

```sh
npm install react-native-reanimated
```

or 

```sh
yarn add react-native-reanimated
```

If you are using Expo, you are done. Otherwise, continue to the next steps.

Next, we need to link these libraries. The steps depends on your React Native version:

- **React Native 0.60 and higher**

  On newer versions of React Native, [linking is automatic](https://github.com/react-native-community/cli/blob/main/docs/autolinking.md).

  To complete the linking on iOS, make sure you have [Cocoapods](https://cocoapods.org/) installed. Then run:

  ```sh
  cd ios
  pod install
  cd ..
  ```

- **React Native 0.59 and lower**

  If you're on an older React Native version, you need to manually link the dependencies. To do that, run:

  ```sh
  react-native link react-native-reanimated
  ```

We're done! Now you can build and run the app on your device/simulator.

## Usage

```js
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  useAccordionAnimation,
  AnimatedSection,
} from 'reanimated-collapsible-helpers';

export default function App() {
  const {
    animatedHeight,
    height,
    onPress,
    onLayout,
    state,
  } = useAccordionAnimation();

  return (
    <View style={styles.background}>
      <View style={styles.overflow}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>
            {state === 'expanded' ? 'Collapse' : 'Expand'}
          </Text>
        </TouchableOpacity>
        <AnimatedSection
          animatedHeight={animatedHeight}
          onLayout={onLayout}
          state={state}
        >
          <View style={styles.textContainer}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              quis erat suscipit, mollis nibh ut, venenatis lectus. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </Text>
          </View>
        </AnimatedSection>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#efefef',
    padding: 20,
  },
  overflow: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  button: {
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  textContainer: {
    padding: 15,
  },
});
```

[Try this example on Snack](https://snack.expo.io/@trensik/reanimated-collapsible-helpers-example)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Credits

<div>Icons made by <a href="https://www.flaticon.com/free-icon/motion-graphic_2548862?related_item_id=2548862&term=animation" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<!-- badges -->

[build-badge]: https://img.shields.io/circleci/build/github/Trancever/reanimated-collapsible-helpers/main.svg?style=flat-square
[build]: https://circleci.com/gh/Trancever/reanimated-collapsible-helpers
[version-badge]: https://img.shields.io/npm/v/reanimated-collapsible-helpers.svg?style=flat-square
[package]: https://www.npmjs.com/package/reanimated-collapsible-helpers
[license-badge]: https://img.shields.io/npm/l/reanimated-collapsible-helpers.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT