import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ErrorPage({ message }) {
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
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
