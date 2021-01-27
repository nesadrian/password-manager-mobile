import React from 'react';
import { View } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'
import { setPin } from '../helpers'

export default function RegisterPage({ navigation }) {
  return (
    <View>
      <CodePin
        text="Enter PIN code"
        checkPinCode={(pin, callback) => {
          setPin(pin)
          navigation.navigate('Passwords')
        }}
        autoFocusFirst={true}
        containerStyle={styles.pinContainer}
        containerPinStyle={styles.pinNumberContainer}
        pinStyle={styles.pin}
        textStyle={styles.pinText}
      />
    </View>
  );
}