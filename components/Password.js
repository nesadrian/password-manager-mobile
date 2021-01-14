import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PasswordsPage({ name, password }) {
    return (
        <View style={styles.container}>
            <Text>{name}, {password}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
