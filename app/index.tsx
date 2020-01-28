import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {Playboard} from "./GameLogic/Playboard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Tic Tac Toe!
      </Text>
      <Playboard/>
    </View>
  );
};

export default App;
