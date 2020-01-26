import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dimensions} from "react-native";
import PlaySquare from "./PlaySquare";

interface Props {

}

interface State {
    playboardValues: playboard
    playboardHeight: number;
    nextValue: 0|1;
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
            playboardHeight: Dimensions.get('window').height - 500,
            nextValue: 0,
        };
    }

    initPlayground() {
        var playboard: FixedArray<playboardRow, 3> = [[null, null, null], [null, null, null], [null, null, null]];
        this.setState({
            playboardValues: playboard,
            nextValue: 0,
        })
    }

    addValue(x: playboardRange, y: playboardRange){
        const nextValue =  this.state.nextValue;
        var currentPlayboard: playboard =this.state.playboardValues;
        currentPlayboard[x][y] = nextValue;
        this.setState({
            playboardValues: currentPlayboard,
            nextValue: nextValue === 0 ? 1: 0,
        });
    }

    checkWinningCondition(): false | playboardValue {
        const playboard = this.state.playboardValues;
        //check x rows
        for (var i= 0; i < 3; i++) {
            let result = this.checkRow(playboard[i]);
            if (result !== false) {
                return result;
            }
        }
        //check y rows:
        for (var i = 0; i < 3; i++) {
            let result = this.checkRow(this.getYRow(i as playboardRange));
            if (result !== false) {
                return result;
            }
        }
        // check vertical rows
        let result = this.checkRow([playboard[0][0], playboard[1][1], playboard[2][2]]);
        if (result !== false) {
            return result;
        }
        result = this.checkRow([playboard[0][2], playboard[1][1], playboard[2][0]]);
        if (result !== false) {
            return result
        }
        return false;
    }

    getYRow (key: playboardRange): playboardRow {
        const playboard = this.state.playboardValues;
        return([playboard[0][key], playboard[1][key], playboard[2][key]])
    }

    checkRow(row: playboardRow): false | playboardValue {
        if (row[0] !== null) {
            if (row[1] !== row[0]) {
                return false;
            }
            if (row[2] !== row[0]) {
                return false;
            }
            return row[0];
        }
        return false;
    }

    render() {
        const height = this.state.playboardHeight;
        const playboard = this.state.playboardValues;
        return(
            <View style={ [styles.outerContainer, {minHeight: height, minWidth: Dimensions.get('window').width -100}]}>
                <View style={styles.innerContainer}>
                    <PlaySquare value={playboard[0][0]} onClick={() => this.addValue(0,0)}/>
                    <PlaySquare value={playboard[0][1]} onClick={() => this.addValue(0,1)}/>
                    <PlaySquare value={playboard[0][2]} onClick={() => this.addValue(0,2)}/>
                </View>
                <View style={styles.innerContainer}>
                    <PlaySquare value={playboard[1][0]} onClick={() => this.addValue(1,0)}/>
                    <PlaySquare value={playboard[1][1]} onClick={() => this.addValue(1,1)}/>
                    <PlaySquare value={playboard[1][2]} onClick={() => this.addValue(1,2)}/>
                </View>
                <View style={styles.innerContainer}>
                    <PlaySquare value={playboard[2][0]} onClick={() => this.addValue(2,0)}/>
                    <PlaySquare value={playboard[2][1]} onClick={() => this.addValue(2,1)}/>
                    <PlaySquare value={playboard[2][2]} onClick={() => this.addValue(2,2)}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row'
    }
});
