import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TextInputBox from './TextInputBox'

export default function AddPasswordPage() {
    return (
        <View style={styles.container}>
            <Text>Add Password</Text>
            <TextInputBox label="Name" />
            <TextInputBox label="Password" />
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
