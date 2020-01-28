import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {playboardValue} from './Playboard'

interface WinningTextProps {
    winner?: playboardValue;
}

const WinningText = (props: WinningTextProps): JSX.Element => {
    return (
        <View style={styles.container}>
            {props.winner === null ? <Text style={[styles.defaultText, styles.draw]}>Draw! Maybe Play again ;)</Text>
                :
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={styles.image} source={props.winner === 0 ? require('../../assets/O-tiktak.png') : require('../../assets/X-tiktak.png')}/>
                    <Text style={styles.defaultText}>WON THE GAME</Text>
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececee'
    },
    defaultText: {
        fontSize: 28,
        color: '#9c9cac',
        textAlign: 'center'
    },
    draw: {
        fontSize: 46,
    },
    image: {
        height: '50%',
        resizeMode: 'contain',
        marginBottom: 20,
    }
});

export default WinningText;