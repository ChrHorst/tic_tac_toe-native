# Tic Tac Toe

[React Native](https://facebook.github.io/react-native/) based Tic Tac Toe


## Gameplay

2 players play Tic Tac Toe taking turns on the same device (no network-multiplayer, no AI).


## Target design

![Design 1](https://cdn.rawgit.com/neopoly/tic_tac_toe-native/master/doc/design-1.png?v=2)

![Design 2](https://cdn.rawgit.com/neopoly/tic_tac_toe-native/master/doc/design-2.png?v=2)

![Design 3](https://cdn.rawgit.com/neopoly/tic_tac_toe-native/master/doc/design-3.png?v=2)

## Environment

* [NodeJS](https://nodejs.org) (Version 12.14)
* Build the app for iOS or Android
  * iOS requires an Mac with MacOS and XCode >= 8.2
  * Android works on MacOS, Windows and Linux, but requires an Android development environment

## Setup

* Setup React Native by following the official [Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html#content)
  * Install [NodeJS](https://nodejs.org), [watchman](https://facebook.github.io/watchman/)
  * Install [react-native-cli](https://www.npmjs.com/package/react-native-cli)
  * Install a development environment for iOS or Android
* Clone your fork on your machine
* Use your favorite terminal and navigate to the project folder, than install the dependencies:

		$ npm install


## Run, test, build

### Run

* Use our favorite terminal and navigate to the project folder
* Build and start your app:
  * iOS: `npm run ios`
  * Android: `npm run android`

### Test

* Run all JS tests: `npm test`

Technologies used
-----------------

* [React](https://facebook.github.io/react/) for UI rendering
* [React Native](https://facebook.github.io/react-native/) for mobile components
* [Jest](http://facebook.github.io/jest/) as the test runner
* [Enzyme](http://airbnb.io/enzyme/) as the UI test renderer
