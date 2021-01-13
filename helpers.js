import * as SecureStore from 'expo-secure-store';

export const getAllPasswords = async () => {
  const data = await SecureStore.getItemAsync('passwords')
  return JSON.parse(data)
}

export const isDuplicate = async name => {
   const passwords = await getAllPasswords()
   return passwords.some(ele => ele.name === name)
}

