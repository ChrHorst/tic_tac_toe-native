import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {Dimensions} from "react-native";
import PlaySquare from "./PlaySquare";
import WinningText from './WinningText'

interface Props {

}

interface State {
    playboardValues: playboard
    playboardHeight: number;
    nextValue: 0 | 1;
    gameFinished: boolean;
    gameStarted: boolean;
    winner?: playboardValue;
}

export type playboardValue = 0 | 1 | null;
export type playboardRange = 0 | 1 | 2;
export type playboardRow = FixedArray<playboardValue, 3>;
export type playboard = FixedArray<playboardRow, 3>

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
            gameFinished: false,
            gameStarted: false,
        };
    }

    initPlayground() {
        var playboard: FixedArray<playboardRow, 3> = [[null, null, null], [null, null, null], [null, null, null]];
        this.setState({
            playboardValues: playboard,
            nextValue: 0,
            gameFinished: false,
            gameStarted: true,
            winner: null,
        })
    }

    addValue(x: playboardRange, y: playboardRange) {
        const nextValue = this.state.nextValue;
        var currentPlayboard: playboard = this.state.playboardValues;
        if (this.state.gameStarted === false || this.state.gameFinished === true || currentPlayboard[x][y] !== null) {
            return;
        }
        currentPlayboard[x][y] = nextValue;
        this.setState({
            playboardValues: currentPlayboard,
            nextValue: nextValue === 0 ? 1 : 0,
        });
        var gameFinished = this.checkWinningCondition();
        if (gameFinished !== false) {
            this.setState({
                gameFinished: true,
                winner: gameFinished,
            })
        }
        else if (this.checkDraw()) {
            this.setState({
                gameFinished: true,
                winner: null,
            })
        }
    }

    checkWinningCondition(): false | playboardValue {
        const playboard = this.state.playboardValues;
        //check x rows
        for (var i = 0; i < 3; i++) {
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

    getYRow(key: playboardRange): playboardRow {
        const playboard = this.state.playboardValues;
        return ([playboard[0][key], playboard[1][key], playboard[2][key]])
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

    checkDraw() {
        const playground = this.state.playboardValues;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (playground[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    render() {
        const height = this.state.playboardHeight;
        const playboard = this.state.playboardValues;
        const squareWide = (Dimensions.get("window").width - 40) / 3;
        return (
            <View style={styles.outerContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.flexText}/>
                    <Text style={[styles.defaultText, {flex: 2}]}>TICK TAK</Text>
                    {this.state.gameStarted && !this.state.gameFinished
                        ? <Text style={[styles.defaultText, styles.abortText]}
                                onPress={() => this.setState({gameFinished: true})}>ABORT</Text>
                        : <Text style={styles.flexText}/>}
                </View>
                {this.state.gameFinished ? <WinningText winner={this.state.winner}/>
                    :
                    <View
                        style={[styles.playboardContainer, this.state.gameStarted && !this.state.gameFinished && {backgroundColor: '#8a85bd'}]}>
                        <View style={styles.rowContainer}>
                            <PlaySquare value={playboard[0][0]} onClick={() => this.addValue(0, 0)} wide={squareWide}
                                        borderStyle={[styles.rightBorder]}/>
                            <PlaySquare value={playboard[0][1]} onClick={() => this.addValue(0, 1)} wide={squareWide}
                                        borderStyle={[styles.rightBorder]}/>
                            <PlaySquare value={playboard[0][2]} onClick={() => this.addValue(0, 2)} wide={squareWide}/>
                        </View>
                        <View style={styles.rowContainer}>
                            <PlaySquare value={playboard[1][0]} onClick={() => this.addValue(1, 0)} wide={squareWide}
                                        borderStyle={[styles.rightBorder, styles.topBorder]}/>
                            <PlaySquare value={playboard[1][1]} onClick={() => this.addValue(1, 1)} wide={squareWide}
                                        borderStyle={[styles.rightBorder, styles.topBorder]}/>
                            <PlaySquare value={playboard[1][2]} onClick={() => this.addValue(1, 2)} wide={squareWide}
                                        borderStyle={[styles.topBorder]}/>
                        </View>
                        <View style={styles.rowContainer}>
                            <PlaySquare value={playboard[2][0]} onClick={() => this.addValue(2, 0)} wide={squareWide}
                                        borderStyle={[styles.rightBorder, styles.topBorder]}/>
                            <PlaySquare value={playboard[2][1]} onClick={() => this.addValue(2, 1)} wide={squareWide}
                                        borderStyle={[styles.rightBorder, styles.topBorder]}/>
                            <PlaySquare value={playboard[2][2]} onClick={() => this.addValue(2, 2)} wide={squareWide}
                                        borderStyle={[styles.topBorder]}/>
                        </View>
                    </View>
                }
                <View style={styles.bottomContainer}>
                    {this.state.gameStarted && !this.state.gameFinished ?
                        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline'}}>
                            <Image
                                source={this.state.nextValue === 0 ? require('../../assets/O-tiktak.png') : require('../../assets/X-tiktak.png')}
                                style={styles.nextPlayerThumbtail}/>
                            <Text style={styles.defaultText}>s TURN </Text>
                        </View>
                        : <Button title={'Start Game'} onPress={() => this.initPlayground()}/>}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    playboardContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 'auto',
        alignItems: 'center',
        backgroundColor: '#ececee'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    rightBorder: {
        borderRightWidth: 8,
    },
    topBorder: {
        borderTopWidth: 8,
    },
    nextPlayerThumbtail: {
        height: 32,
        width: 32,
        resizeMode: 'contain'
    },
    defaultText: {
        fontSize: 28,
        color: '#9c9cac',
        textAlign: 'center'
    },
    flexText: {
        flex: 1
    },
    abortText: {
        flex: 1,
        fontSize: 16,
        textDecorationLine: 'underline',
        textAlign: 'right',
    }
});
