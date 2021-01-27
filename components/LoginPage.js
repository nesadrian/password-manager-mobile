import React from 'react';
import { View } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'

export default function LoginPage() {
  return (
    <View>
      <CodePin
        text="Enter PIN code"
        error="Wrong PIN code"
        autoFocusFirst={true}
        containerStyle={styles.pinContainer}
        containerPinStyle={styles.pinNumberContainer}
        pinStyle={styles.pin}
        textStyle={styles.pinText}
      />
    </View>
  );
}
