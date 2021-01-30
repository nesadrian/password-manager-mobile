import React from 'react';
import { Button } from 'react-native';

export default function SettingsButton({ navigation }) {
  return (
    <Button title="Settings" onPress={() => navigation.navigate('Settings')}/>
  );
}
