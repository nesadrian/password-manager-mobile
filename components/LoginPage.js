import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'
import { getPin } from '../helpers'

export default function LoginPage({ navigation }) {
  const [pin, setPin] = useState(undefined)

  useEffect(() => {
    (async () => {
      const pinCode = await getPin()
      pinCode ? setPin(pinCode) : navigation.navigate('Register PIN')
    })();
  }, [])

  return (
    <View>
      {pin ?
        <CodePin
          code={pin}
          text="Enter PIN code"
          error="Wrong PIN code"
          success={() => navigation.navigate('Passwords')}
          autoFocusFirst={true}
          containerStyle={styles.pinContainer}
          containerPinStyle={styles.pinNumberContainer}
          pinStyle={styles.pin}
          textStyle={styles.pinText}
        />
      : <Text>Loading</Text>
      }
    </View>
  );
}
