import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView , Button, KeyboardAvoidingView } from 'react-native';
import TextInputBox from './TextInputBox'
import { isDuplicate, addPassword } from '../helpers'

export default function AddPasswordPage({ navigation }) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleSubmit = async () => {
        if(name.trim() === '' || password.trim() === '') {
            setErrorMessage('Invalid input')
        } else if(await isDuplicate(name)) {
            setErrorMessage('Name already exists')
        } else {
            await addPassword(name, password)
            navigation.goBack(null)
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <ScrollView contentContainerStyle={styles.container}>
                <View>
                    <Text style={styles.title}>Add Password</Text>
                </View>
                <TextInputBox label="Name" onChangeText={(text) => setName(text)} handleSubmit={handleSubmit} />
                <TextInputBox label="Password" onChangeText={(text) => setPassword(text)} handleSubmit={handleSubmit} />
                <Button 
                    title="Submit"
                    color="#2196f3"
                    onPress={handleSubmit}
                    disabled={name === '' || password === ''}
                />
                {errorMessage && <Text>{errorMessage}</Text>}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        margin: 30
    },
});
