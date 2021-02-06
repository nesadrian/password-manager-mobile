import React from 'react';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import PasswordsPage from './components/PasswordsPage'
import AddPasswordPage from './components/AddPasswordPage'
import ChangePinPage from './components/ChangePinPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native'
import SettingsPage from './components/SettingsPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="Login" component={LoginPage} options={{headerLeft: () => null}} />
        <Stack.Screen name="Register PIN" component={RegisterPage} options={{headerLeft: () => null}} />
        <Stack.Screen name="Change PIN" component={ChangePinPage} />
        <Stack.Screen name="Passwords" component={PasswordsPage} options={({ navigation }) => ({
          headerLeft: () => null,
          headerRight: () => <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
        })} />
        <Stack.Screen name="Add Password" component={AddPasswordPage}/>
        <Stack.Screen name="Settings" component={SettingsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
