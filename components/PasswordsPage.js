import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import ErrorPage from './ErrorPage'
import Password from './Password'
import PasswordModal from './PasswordModal'
import { getAllPasswords } from '../helpers'
import { BlurView } from 'expo-blur';

export default function PasswordsPage() {
    const [secureStoreAvailable, setSecureStoreAvailable] = useState()
    const [passwords, setPasswords] = useState()
    const [clickedPassword, setClickedPassword] = useState()

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
                <ScrollView style={styles.listContainer}>
                    {passwords === []
                        ? <Text>No passwords added</Text>
                        : passwords.map(password => <Password key={password.name} name={password.name} password={password.password} handleClick={() => setClickedPassword(password)} />)
                    }
                </ScrollView>
            {clickedPassword &&
                <BlurView intensity={80} tint={'light'} onPress={() => setClickedPassword(undefined)} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <PasswordModal name={clickedPassword.name} password={clickedPassword.password} handleClickOutside={() => setClickedPassword(undefined)} />
                </BlurView>
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
    listContainer: {
        width: '100%'
    },
});
