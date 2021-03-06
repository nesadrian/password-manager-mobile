import React, { useState, useEffect, useContext } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native'
import PinCode from './PinCode'
import { styles } from '../styles'
import { getPin } from '../helpers'
import { AuthContext } from '../App'

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
          <PinCode
            code={pin}
            text="Enter PIN code"
            error={() => alert("Wrong PIN code, please try again")}
            onSuccess={() => logIn()}
            length={4}
          />
        : <Text>Loading</Text>
        }
      </View>
    </KeyboardAvoidingView>
  );
}
