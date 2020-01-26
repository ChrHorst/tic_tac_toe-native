import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
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
      <Text style={styles.instructions}>
        Insert a Tic Tac Toe game here.
      </Text>
        <Playboard/>
      <Text style={styles.instructions}>
        <ReloadInstructions />
      </Text>
      <Text style={styles.instructions}>
        <DebugInstructions />
      </Text>
    </View>
  );
};

export default App;
