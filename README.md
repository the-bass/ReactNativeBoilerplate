React Native Boilerplate
========================

This is a starting point for React Native Apps using Redux. It has many similarities to [https://github.com/davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) by design.


# Features

 - A simple counter functionality to showcase the usage of React Native and Redux
 - Runs on Android and iOS


# Versions

 - [React Native](https://facebook.github.io/react-native/): ^0.23.1
 - [Redux](http://redux.js.org/index.html): ^3.4.0


# Run the app

Run 

```sh
$ npm install
```

in the root folder of the project to install the dependencies.

If necessary, take a look at how to configure your devices/simulators in the [React Native Documentation](https://facebook.github.io/react-native/docs/getting-started.html). After following these instructions, you should be able to start the app with

```sh
$ react-native run-android
```

and

```sh
$ react-native run-ios
```

, respectively.


# Spin-off your own app

Follow the instructions found [here](http://stackoverflow.com/questions/32830046/renaming-a-react-native-project) to rename the app:

 - Change the name attribute in ```package.json``` and run

  ```sh
  $ react-native upgrade
  ```

 - Then, in the files ```index.ios.js``` and ```index.android.js``` in the root of the project, replace the line ```AppRegistry.registerComponent('ReactNativeBoilerplate', () => Root)``` with ```AppRegistry.registerComponent('YourNewAppName', () => Root)```
 
After that, you might want to make sure to start a fresh git project.


# Todo

 - Implement tests for the existing components and modules
