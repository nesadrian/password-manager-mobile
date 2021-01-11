import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TextInputBox({ label }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
        placeholder={label}
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
  },
  input: {
    height: '100%',
    width: '100%',
    fontSize: 20
  }
});
