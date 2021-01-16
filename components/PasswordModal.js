import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native';

export default function PasswordModal() {
  return (
    <Modal 
      animationType="slide"
      transparent={true}
      visible={true}
    >
      <View style={styles.popup}>
          <Text>Test</Text>
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
  }
});
