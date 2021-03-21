import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles'

export default function PinCode({ text }) {
    return(
        <View style={styles.pinButtonContainer}>
            <TouchableOpacity style={styles.pinButton}>
                <Text style={styles.pinButtonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}