import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        //fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    }
});

export default NumberContainer;