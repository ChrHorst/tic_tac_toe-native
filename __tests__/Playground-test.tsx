import "react-native";
import React from "react";
import App from "../app/index";

import renderer from "react-test-renderer";
import {Playboard} from "../app/GameLogic/Playboard";

it('test playground init', () => {
    const component = renderer.create(<Playboard/>);
    const instance = component.getInstance() as Playboard;
    expect(instance.state.playboardValues).toStrictEqual([[null, null, null], [null, null, null], [null, null, null]]);
});

it('test playground addValue',  () => {
    const component = renderer.create(<Playboard/>);
    const instance = component.getInstance() as Playboard;
    instance.addValue(1,2,1);
    expect(instance.state.playboardValues).toStrictEqual([[null, null, null], [null, null, 1], [null, null, null]]);
});