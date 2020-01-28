import React from 'react';
import {StyleSheet, View, Text, ViewStyle} from "react-native";
import {playboardValue} from "./Playboard";

interface Props {
    value: playboardValue;
    onClick: () => void;
    wide: number;
    borderStyle?: ViewStyle[];
}

const PlaySquare = (props: Props): JSX.Element => {
    return (
        <View style={[styles.container, props.borderStyle, {
            minHeight: props.wide,
            maxHeight: props.wide,
            maxWidth: props.wide,
            minWidth: props.wide
        }]} onTouchEnd={props.onClick}>
            <Text>
                {props.value === null ? '' : props.value === 0 ? '0' : 'X'}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        padding: 10,
    },
});

export default PlaySquare;
