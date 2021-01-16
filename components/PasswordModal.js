import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function PasswordModal({ name, password, handleClickOutside }) {
  const [showPassword, setShowPassword] = useState(false)


  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={true}
    >
      <TouchableOpacity onPress={handleClickOutside}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.popup}>
                <Text style={styles.name}>{name}</Text>
                <Text style={showPassword ? styles.password : styles.passwordHidden}>{showPassword ? password : '•'.repeat(password.length)}</Text>
                <Button title={(showPassword ? 'Hide' : 'Show')} onPress={() => setShowPassword(!showPassword)} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
  },
  popup: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
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
