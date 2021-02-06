import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native'
import styles from '../styles'

export default function SettingsPage({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <ScrollView style={styles.listContainer}>
          <Button title="Change PIN"/>
      </ScrollView>
    </View>
  );
}
