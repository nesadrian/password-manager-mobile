import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import ErrorPage from './ErrorPage'

export default function PasswordsPage() {
    const [secureStoreAvailable, setSecureStoreAvailable] = useState()

    useEffect(() => {
        (async () => {
            const secureStoreAvailability = await SecureStore.isAvailableAsync()
            setSecureStoreAvailable(secureStoreAvailability)
        })();
    }, [])

    if(!secureStoreAvailable) {
        return <ErrorPage message="Device not compatible" />
    }

    return (
        <View style={styles.container}>
            <Text>Password Page</Text>
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
