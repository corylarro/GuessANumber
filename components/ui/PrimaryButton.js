import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../utils/colors';

function PrimaryButton({ children, onPress }) {
    function pressHandler() {
        onPress();
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
            style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            onPress={onPress}
            >
                <Text style={styles.buttonText}> {children} </Text>
            </Pressable>      
        </View>      
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        PadHorizontal: 16,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    pressed: {
        opacity: 0.75
    }
});