import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ConfirmModal from './ConfirmModal'

export default function PasswordsPage({ name, password, isEditing, handleClick, handleClickDelete }) {
    const [clickedDelete, setClickedDelete] = useState()

    const handleClickConfirm = () => {
      handleClickDelete(name)
      setClickedDelete(false)
    }

    return (
      <TouchableOpacity onPress={handleClick}>
          {clickedDelete && <ConfirmModal name={name} handleClickOutside={() => setClickedDelete(false)} clickedConfirm={handleClickConfirm} />}

          <View style={styles.container}>

              <Text style={styles.name}>{name}</Text>
              {/*<Text style={styles.password}>{'•'.repeat(password.length)}</Text>*/}
              {isEditing && <Button title="Delete" onPress={() => setClickedDelete(true)} />}
          </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20
    },
    name: {
      fontSize: 30
    },
    password: {
      fontSize: 45,
      letterSpacing: -8,
    },
    button: {
      marginLeft: 'auto'
    }
});
