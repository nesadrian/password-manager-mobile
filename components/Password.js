import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PasswordsPage({ name, password }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.password}>{'•'.repeat(password.length)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    name: {
      fontSize: 30
    },
    password: {
      fontSize: 45,
      letterSpacing: -8,
    }
});
