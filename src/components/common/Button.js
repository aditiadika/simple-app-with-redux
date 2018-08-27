import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});

export { Button };