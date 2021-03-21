import React, {useContext } from 'react';
import { AuthContext } from '../App'
import { View, KeyboardAvoidingView } from 'react-native'
import PinCode from './PinCode'
import styles from '../styles'

export default function RegisterPage() {
  const { register } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <PinCode
          text="Enter PIN code"
          checkPinCode={pin => register(pin)}
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
