# reanimated-collapsible-helpers

nothing

## Installation

Open a Terminal in the project root and run:

```sh
npm install reanimated-collapsible-helpers
```

or

```sh
yarn add reanimated-collapsible-helpers
```

Now we need to install [`react-native-reanimated`](https://github.com/kmagiera/react-native-reanimated).

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
import ReanimatedAccordionHelpers from "reanimated-collapsible-helpers";

// ...

const result = await ReanimatedAccordionHelpers.multiply(3, 7);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
