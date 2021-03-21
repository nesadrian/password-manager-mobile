import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native'
import PinCode from './PinCode'
import styles from '../styles'
import { setPin } from '../helpers'

// TODO: refactor this and RegisterPage
export default function ChangePinPage({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <PinCode
          text="Enter PIN code"
          checkPinCode={(pin, callback) => {
            setPin(pin)
            navigation.goBack(null)
          }}
          autoFocusFirst={true}
          containerStyle={styles.pinContainer}
          containerPinStyle={styles.pinNumberContainer}
          pinStyle={styles.pin}
          textStyle={styles.pinText}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
