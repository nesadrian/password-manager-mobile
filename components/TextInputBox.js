import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableWithoutFeedback } from 'react-native';

export default function TextInputBox({ label, onChangeText, handleSubmit }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <TextInput 
          style={styles.input}
          onChangeText={text => {
            setText(text)
            onChangeText(text)
          }}
          value={text}
          placeholder={label}
          onSubmitEditing={handleSubmit}
        />
      </TouchableWithoutFeedback>
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
