import React from 'react';
import { StyleSheet, Text, ScrollView , Button} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import TextInputBox from './TextInputBox'

export default function AddPasswordPage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Password</Text>
            <TextInputBox label="Name" />
            <TextInputBox label="Password" />
            <Button 
                title="Submit"
                color="#2196f3"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        margin: 30
    }
});
