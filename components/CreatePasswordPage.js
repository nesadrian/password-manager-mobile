import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CreatePasswordPage() {
    return (
        <View style={styles.container}>
            <Text>Create Password Page</Text>
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
