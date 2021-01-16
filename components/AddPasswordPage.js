import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView , Button} from 'react-native';
import TextInputBox from './TextInputBox'
import { isDuplicate, addPassword } from '../helpers'

export default function AddPasswordPage() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleSubmit = async () => {
        if(await isDuplicate(name)) {
            setErrorMessage('Name already exists')
        } else {
            addPassword(name, password)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Add Password</Text>
            <TextInputBox label="Name" onChangeText={(text) => setName(text)} />
            <TextInputBox label="Password" onChangeText={(text) => setPassword(text)} />
            <Button 
                title="Submit"
                color="#2196f3"
                onPress={handleSubmit}
                disabled={name === '' || password === ''}
            />
            {errorMessage && <Text>{errorMessage}</Text>}
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
    },
});
