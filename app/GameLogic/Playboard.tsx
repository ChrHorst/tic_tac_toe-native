import React from 'react';
import {Text} from 'react-native';
import {number} from "prop-types";

interface Props {

}

interface State {
    playboardValues: playboard
}

export type playboardValue = 0|1| null;
export type playboardRange = 0|1|2;
export type playboardRow = FixedArray<playboardValue, 3>;
export type playboard = FixedArray<playboardRow,3>

interface FixedArray<T, L extends number> extends Array<T> {
    0: T;
    length: L;
}

export class Playboard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        var playboard: FixedArray<playboardRow, 3> = [[null, null, null], [null, null, null], [null, null, null]];
        this.state = {
            playboardValues: playboard,
        };
    }

    initPlayground() {
        var playboard: FixedArray<playboardRow, 3> = [[null, null, null], [null, null, null], [null, null, null]];
        this.setState({playboardValues: playboard})
    }

    addValue(x: playboardRange, y: playboardRange, value: playboardValue){
        var currentPlayboard: playboard =this.state.playboardValues;
        currentPlayboard[x][y] = value;
        this.setState({
            playboardValues: currentPlayboard,
        });
    }

    render() {
        return(<Text/>)
    }
}