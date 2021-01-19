import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { deletePassword } from '../helpers'

export default function PasswordsPage({ name, password, handleClick, isEditing }) {

    const handleClickDelete = async () => {
      //TODO: Add confirmation prompt
      deletePassword(name)
    }

    return (
      <TouchableOpacity onPress={handleClick}>
          <View style={styles.container} onP>
              <Text style={styles.name}>{name}</Text>
              {/*<Text style={styles.password}>{'•'.repeat(password.length)}</Text>*/}
              {isEditing && <Button title="Delete" onPress={handleClickDelete} />}
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
