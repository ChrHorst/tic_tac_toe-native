import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {playboardValue} from "./Playboard";

interface Props {
    value: playboardValue,
    onClick: () => void,
}

const PlaySquare = (props: Props): JSX.Element => {
    return(
        <View style={styles.container} onTouchEnd={props.onClick}>
            <Text>
                {props.value === null ? '' : props.value === 0 ? '0' :'X'}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'gray',
        minHeight: 100,
        minWidth: 100,
        maxHeight: 150,
    },
});

export default PlaySquare;
