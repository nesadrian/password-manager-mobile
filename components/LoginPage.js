import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native'
import CodePin from 'react-native-pin-code'
import styles from '../styles'
import { getPin } from '../helpers'

export default function LoginPage({ navigation }) {
  const [pin, setPin] = useState(undefined)
  const { logIn } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      setPin(await getPin())
    })();
  }, [])

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        {pin ?
          <CodePin
            code={pin}
            text="Enter PIN code"
            error="Wrong PIN code"
            success={() => logIn()}
            autoFocusFirst={true}
            obfuscation={true}
            containerStyle={styles.pinContainer}
            containerPinStyle={styles.pinNumberContainer}
            pinStyle={styles.pin}
            textStyle={styles.pinText}
          />
        : <Text>Loading</Text>
        }
      </View>
    </KeyboardAvoidingView>
  );
}
