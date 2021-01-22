import React from 'react'
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function ConfirmModal({ name, handleClickOutside, clickedConfirm }) {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <TouchableOpacity onPress={handleClickOutside}>
        <View style={styles.container}>
          <TouchableWithoutFeedback>
            <View style={styles.popup}>
                <Text style={styles.name}>Do you want to delete {name}?</Text>
                <View style={styles.buttonsContainer}>
                  <Button title={('Yes')} onPress={() => clickedConfirm()} />
                  <Button title={('No')} onPress={() => handleClickOutside()} />
                </View>
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
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});