import React, { useState, useEffect, useMemo } from 'react';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import PasswordsPage from './components/PasswordsPage'
import AddPasswordPage from './components/AddPasswordPage'
import ChangePinPage from './components/ChangePinPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native'
import SettingsPage from './components/SettingsPage'
import { getPin, setPin } from './helpers'

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export default function App() {
  const [isRegistered, setIsRegistered] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    (async () => {
      const pinCode = await getPin()
      setIsRegistered(pinCode)
    })();
  }, [])

  const authContext = useMemo(
    () => ({
      logIn: () => setLoggedIn(true),
      logOut: () => setLoggedIn(false),
      register: async (pin) => {
        await setPin(pin)
        setIsRegistered(pin)
      }
    }),[]
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
          {!isRegistered ? (
            <Stack.Screen name="Register PIN" component={RegisterPage} options={{headerLeft: () => null}} />
          ) : (!loggedIn ? (
              <Stack.Screen name="Login" component={LoginPage} options={{headerLeft: () => null}} />
          ) : (
            <>
              <Stack.Screen name="Passwords" component={PasswordsPage} options={({ navigation }) => ({
                headerLeft: () => null,
                headerRight: () => <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
              })} />
              <Stack.Screen name="Change PIN" component={ChangePinPage} />
              <Stack.Screen name="Add Password" component={AddPasswordPage}/>
              <Stack.Screen name="Settings" component={SettingsPage}/>
            </>
          )
        )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
