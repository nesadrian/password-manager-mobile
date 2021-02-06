import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'
import { setPin } from '../helpers'

// TODO: refactor this and RegisterPage
export default function ChangePinPage({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <CodePin
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
