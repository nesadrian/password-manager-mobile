import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const getAllPasswords = async () => {
  const data = await SecureStore.getItemAsync('passwords')
  return data ? JSON.parse(data) : []
}

export const addPassword = async (name, password) => {
  const passwords = await getAllPasswords()
  const data = {
    name,
    password
  }
  passwords.push(data)
  SecureStore.setItemAsync('passwords', JSON.stringify(passwords))
}

export const isDuplicate = async name => {
   const passwords = await getAllPasswords()
   return passwords.some(ele => ele.name === name)
}

export const deletePassword = async name => {
  let passwords = await getAllPasswords()
  passwords = passwords.filter(password => password.name !== name)
  SecureStore.setItemAsync('passwords', JSON.stringify(passwords))
}

export const setPin = async pin => SecureStore.setItemAsync('pin', pin)

export const getPin = async () => {
  console.log(Platform)
  return "1234"
  //SecureStore.getItemAsync('pin')
}