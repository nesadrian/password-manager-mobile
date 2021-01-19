import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import ErrorPage from './ErrorPage'
import Password from './Password'
import PasswordModal from './PasswordModal'
import { getAllPasswords } from '../helpers'
import { BlurView } from 'expo-blur';

export default function PasswordsPage({ navigation }) {
    const [secureStoreAvailable, setSecureStoreAvailable] = useState()
    const [passwords, setPasswords] = useState()
    const [clickedPassword, setClickedPassword] = useState()
    const [isEditing, setIsEditing] = useState(false)

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
                <View style={styles.header}>
                    <Button title="Sort" />
                    <Button title="Edit" onPress={() => setIsEditing(!isEditing)}/>
                    <Button title="Add" onPress={() => navigation.navigate('Add Password')}/>
                </View>
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        padding: 10
    },
    listContainer: {
        width: '100%'
    },
});
