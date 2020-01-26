/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../app/index";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import {Playboard} from "../app/GameLogic/Playboard";

it("renders correctly", () => {
  renderer.create(<App />);
});