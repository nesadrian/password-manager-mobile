import * as SecureStore from 'expo-secure-store';

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

