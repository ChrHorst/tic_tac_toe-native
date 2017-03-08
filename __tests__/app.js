import {Text} from "react-native";
import React from "react";
import App from "../app";

import { shallow } from "enzyme";

it("renders correctly", () => {
  const tree = shallow(<App />);
  const texts = tree.find(Text);
  expect(texts).toHaveLength(3);

  const welcome = texts.first();
  expect(welcome.props().children).toBe("Welcome to Tic Tac Toe!");
})
