import React from 'react';
import LoginPage from './components/LoginPage'
import PasswordsPage from './components/PasswordsPage'
import AddPasswordPage from './components/AddPasswordPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Passwords" component={PasswordsPage} />
        <Stack.Screen name="Add Password" component={AddPasswordPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
