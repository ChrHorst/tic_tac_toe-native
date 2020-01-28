import React, { Component } from "react";
import {
  StyleSheet,
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
});

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Playboard/>
    </View>
  );
};

export default App;
