import React, { useContext } from 'react';
import { View, KeyboardAvoidingView } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'

export default function RegisterPage() {
  const { register } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <CodePin
          text="Enter PIN code"
          checkPinCode={async (pin, callback) => register(pin)}
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
