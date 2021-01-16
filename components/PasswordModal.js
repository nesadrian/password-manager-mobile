import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

export default function PasswordModal({ name, password }) {
  const [showPassword, setShowPassword] = useState(false)


  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={true}
    >
      <View style={styles.popup}>
          <Text style={styles.name}>{name}</Text>
          <Text style={showPassword ? styles.password : styles.passwordHidden}>{showPassword ? password : '•'.repeat(password.length)}</Text>
          <Button title={(showPassword ? 'Hide' : 'Show')} onPress={() => setShowPassword(!showPassword)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  listContainer: {
      width: '100%'
  },
  popup: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      marginTop: '50%',
      padding: 30,
      backgroundColor: '#fff',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
  },
  name: {
    fontWeight: '500',
    fontSize: 17.5,
  },
  passwordHidden: {
    fontWeight: '300',
    fontSize: 45,
    letterSpacing: -5,
    margin: 10
  },
  password: {
    fontWeight: '300',
    fontSize: 30,
    margin: 19,
  }
});
