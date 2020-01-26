import "react-native";
import React from "react";

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
    instance.addValue(1,2);
    expect(instance.state.playboardValues).toStrictEqual([[null, null, null], [null, null, 0], [null, null, null]]);
});

it('test finish game', () => {
    const component = renderer.create(<Playboard/>);
    const instance = component.getInstance() as Playboard;
    instance.addValue(1,1);
    expect(instance.checkWinningCondition()).toBe(false);
    instance.addValue(0,0);
    instance.addValue(0,1);
    instance.addValue(0,2);
    expect(instance.checkWinningCondition()).toBe(false);
    instance.addValue(2,1);
    expect(instance.checkWinningCondition()).toBe(0);
});