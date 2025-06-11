# Contributing to Reanimated Collapsible Helpers

## Code of Conduct

We want this community to be friendly and respectful to each other.

## Our Development Process

The core team works directly on GitHub and all work is public.

### Development workflow

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

1. Fork the repo and create your branch from `main` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).
2. Run `yarn` on the root level, to setup the development environment.
3. Do the changes you want and test them out in the example app before sending a pull request.

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix Button color on DarkTheme.
- `feat`: new features, e.g. add Snackbar component.
- `refactor`: code refactor, e.g. new folder structure for components.
- `docs`: changes into documentation, e.g. add usage example for Button.
- `test`: adding or updating tests, eg unit, snapshot testing.
- `chore`: tooling changes, e.g. change circleci config.
- `BREAKING CHANGE`: for changes that break existing usage, e.g. change API of a component.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

We use `typescript` for type checking, `eslint` with `prettier` for linting and formatting the code, and `jest` for testing. Our pre-commit hooks verify that the linter and tests pass when commiting. You can also run the following commands manually:

- `yarn typescript`: type-check files with `tsc`.
- `yarn lint`: lint files with `eslint` and `prettier`.
- `yarn test`: run unit tests with `jest`.

### Sending a pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that `typescript`, `eslint` and all tests are passing.
- Preview the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.

### Running the example

The example app uses [Expo](https://expo.dev/) for the React Native example. You will need to install the Expo app for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) and [iOS](https://itunes.apple.com/app/apple-store/id982107779) to start developing.

After you're done, you can run `yarn example start` in the project root (or `npx expo start` in the `example/` folder) and scan the QR code to launch it on your device.

To run the example on web, run `yarn example web` in the project root.

### Testing a specific pull request/commit

If you want to test the changes brought by a pull request, you can do so by pointing at the git-commit or branch in your `package.json` file. For example:

```json
{
  "dependencies": {
    "react-native-paper": "git+https://github.com/callstack/react-native-paper.git#<commit-hash>",
  }
}
```

Then run `yarn install`/`npm install` in your project to install the package from the git repository.

Alternatively, you may clone the `react-native-paper` repo and use the [yalc](https://github.com/wclr/yalc) tool to link the package to the project.


### Publishing a release

We use [release-it](https://github.com/webpro/release-it) to automate our release. If you have publish access to the NPM package, run the following from the main branch to publish a new release:

```sh
yarn release
```

NOTE: You must have a `GITHUB_TOKEN` environment variable available. You can create a GitHub access token with the "repo" access [here](https://github.com/settings/tokens).

## Reporting issues

You can report issues on our [bug tracker](https://github.com/Trancever/reanimated-collapsible-helpers/issues). Please follow the issue template when opening an issue.

## License

By contributing to Reanimated Collapsible Helpers, you agree that your contributions will be licensed under its **MIT** license.
