import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/colors'

const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 8},
        shadowRadius: 8,
        shadowOpacity: 0.50
    },
});

export default Card;