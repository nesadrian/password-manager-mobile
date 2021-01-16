import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';

export default function TextInputBox({ label, onChangeText }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => {
          setText(text)
          onChangeText(text)
        }}
        value={text}
        placeholder={label}
        onBlur={Keyboard.dismiss}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  input: {
    height: '100%',
    width: '100%',
    fontSize: 20,
    borderColor: '#CCCCCC',
    borderBottomWidth: 1,
  }
});
