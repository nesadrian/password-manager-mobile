import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PasswordsPage({ name, password }) {
    return (
        <View style={styles.container}>
            <Text>{name} {password}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
