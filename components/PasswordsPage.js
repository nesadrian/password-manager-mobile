import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import ErrorPage from './ErrorPage'
import { getAllPasswords } from '../helpers'

export default function PasswordsPage() {
    const [secureStoreAvailable, setSecureStoreAvailable] = useState()
    const [passwords, setPasswords] = useState()

    useEffect(() => {
        (async () => {
            const isAvailable = await SecureStore.isAvailableAsync()
            setSecureStoreAvailable(isAvailable)
            if(isAvailable) {
                const passwords = await getAllPasswords()
                setPasswords(passwords)
            }
        })();
    }, [])

    if(!secureStoreAvailable) {
        return <ErrorPage message="Device not compatible" />
    }

    else if(passwords === undefined) {
        return <ErrorPage message="Loading"/>
    }

    return (
        <View style={styles.container}>
            <Text>Password Page</Text>
            {passwords === []
                ? <Text>No passwords added</Text>
                : passwords.map(password => <Text>{password.name}, {password.password}</Text>)
            }
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
