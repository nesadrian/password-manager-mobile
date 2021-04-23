import React, {useContext } from 'react';
import { AuthContext } from '../App'
import { View, KeyboardAvoidingView } from 'react-native'
import PinCode from './PinCode'
import { styles } from '../styles'

export default function RegisterPage() {
  const { register } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <PinCode
          text="Register PIN code"
          onSuccess={pin => register(pin)}
          length={4}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
