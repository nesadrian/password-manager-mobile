import React from 'react';
import { View, KeyboardAvoidingView, Button, TouchableOpacity, Text } from 'react-native'
import styles from '../styles'
import PinCodeButton from "./PinCodeButton"

export default function PinCode(props) {
    const {
        code,
        text,
        error,
        onSuccess,
        containerStyle,
        containerPinStyle,
        pinStyle,
        textStyle
    } = props;

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <View style={styles.pinButtonsContainer}>
            <PinCodeButton text={1}/>
            <PinCodeButton text={2}/>
            <PinCodeButton text={3}/>
            <PinCodeButton text={4}/>
            <PinCodeButton text={5}/>
            <PinCodeButton text={6}/>
            <PinCodeButton text={7}/>
            <PinCodeButton text={8}/>
            <PinCodeButton text={9}/>
            <PinCodeButton text={0}/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
