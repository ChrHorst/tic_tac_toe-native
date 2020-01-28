import React from 'react';
import {StyleSheet, View, Text, ViewStyle, Image} from "react-native";
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
            {
                props.value !== null ?
                    <Image
                        source={props.value === 0 ?require( '../../assets/O-tiktak.png') : require('../../assets/X-tiktak.png')}
                        style={styles.image} />
                    :
                    <Text/>
            }
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
    image: {
        height: '85%',
        width: '85%',
        resizeMode: 'contain',
    }
});

export default PlaySquare;
