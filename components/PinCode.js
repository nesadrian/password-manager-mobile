import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Button, TouchableOpacity, Text } from 'react-native'
import { styles, colors } from '../styles'
import PinCodeButton from "./PinCodeButton"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PinCode(props) {
  const [pin, setPin] = useState('');

  const {
      code,
      text,
      error,
      onSuccess,
      length,
  } = props;

  useEffect(() => {
    checkPin()
  }, [pin])

  const displayError = () => {
    error()
    setPin('')
  }

  const checkPin = () => {
    if(pin.length === 4) {
      if(!code) {
        onSuccess(pin)
      } else {
        pin === code ? onSuccess(pin) : displayError()
      }
    }
  }

  const addNum = (num) => {
    setPin(pin + num)
  }

  const removeNum = () => pin.length && setPin(pin.slice(0, -1))

  const circles = () => (
    <View style={styles.pinNumberDisplayContainer}>
      {[...Array(length)].map((e, i) => 
          i >= pin.length
            ? <Icon name="checkbox-blank-circle-outline" size={'30px'} color={colors.darkGrey}/>
            : <Icon name="checkbox-blank-circle" size={'30px'} color={colors.darkGrey} />
      )}
    </View>
    
  )

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.pageContainer}>
        <Text>{text}</Text>
        {circles()}
        <View style={styles.pinButtonsContainer}>
            <PinCodeButton onClick={(num) => addNum(num)} text={1}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={2}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={3}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={4}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={5}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={6}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={7}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={8}/>
            <PinCodeButton onClick={(num) => addNum(num)} text={9}/>
            <View style={styles.pinButtonContainer} />
            <PinCodeButton onClick={(num) => addNum(num)} text={0}/>
            <View style={styles.pinButtonContainer}>
              <TouchableOpacity onPress={removeNum}>
                <Icon name="backspace" size={30} color={"grey"} />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
