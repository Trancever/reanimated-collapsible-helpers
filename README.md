# reanimated-collapsible-helpers

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

A cross-platform smooth expand/collapse animation helpers for React Native.

- [Example mobile app](https://expo.io/@trensik/projects/reanimated-collapsible-helpers-example).
- [Example web app](https://reanimated-collapsible-helpers.trancever.vercel.app/).
- Checkout the [example/](https://github.com/Trancever/reanimated-collapsible-helpers/tree/main/example) directory for source code.

## Features

- Smooth animations
- Headless UI
- Cross-platform (iOS, Android, Web)
- Highly customizable
- Fully typed with [TypeScript](https://typescriptlang.org)

## Demo

<a href="https://user-images.githubusercontent.com/18584155/103291619-7771fa80-49ec-11eb-8656-f812bbb59443.mov"><img src="https://user-images.githubusercontent.com/18584155/103284474-9e740080-49db-11eb-9d76-5b05b8e2a22e.gif" width="360"></a>

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
  useCollapsible,
  AnimatedSection,
} from 'reanimated-collapsible-helpers';

export default function App() {
  const { animatedHeight, height, onPress, onLayout, state } = useCollapsible();

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

[Try this example on Snack](https://snack.expo.io/@trensik/reanimated-collapsible-helpers-example-new)

## API reference

The package exports one hook and one component:

- `useCollapsible` hook
- `AnimatedSection` component

### `useCollapsible`

A hook responsible for managing state, animation and providing helper functions.

Usage looks like this:

```js
const { animatedHeight, height, onPress, onLayout, state } = useCollapsible();
```

It accepts one argument `config` - an object containing following properties:

- `duration`: A number representing an expand/collapse animation duration (Optional, defaults to `250ms`).
- `easing`: An easing function used by the animation (Optional, defaults to `Easing.out(Easing.ease)`).

Hook returns an object with following properties:

- `state`: An enum representing a state of the animation - `expanded` or `collapsed`.
- `height`: A number representing full height of the collapsible section. Handy for defining upper bounds of the custom interpolations.
- `animatedHeight`: An `Animated.Value` driving collapse/expand animations. It must be passed to the `AnimatedSection` component as a prop.
- `onLayout`: A function that measures a collapsible element. It must be passed to the `AnimatedSection` component as a prop.
- `onPress`: A function that toggles animation state when it's called. Pass it to a `Touchable` component, that on press, is supposed to expand/collapse some content.

### `AnimatedSection`

A component that takes care of height measuring and animating.

Basic usage:

```js
<AnimatedSection
  animatedHeight={animatedHeight}
  onLayout={onLayout}
  state={state}
>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis erat
    suscipit, mollis nibh ut, venenatis lectus.
  </Text>
</AnimatedSection>
```

#### Props

- `children`: (Required) Accepts a React element that will be rendered as `AnimatedSection` content.
- `animatedHeight`: (Required) An `Animated.Value` driving collapse/expand animations. Pass `animatedHeight` property returned by `useCollapsible` hook.
- `onLayout`: (Required) A function that measures a collapsible element. Pass `onLayout` function returned by `useCollapsible` hook.
- `state`: (Required) A state of the animation. It's used internally by the component to properly handle pointer events of the collapsed element. Pass `state` property returned by `useCollapsible` hook.
- `style`: (Optional) A custom style property that will be passed to the underlying `Animated.View` - animated styles are supported.

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
