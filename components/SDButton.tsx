import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, ViewStyle } from 'react-native';
import { UIComponent } from './../types';

export const SDButton = ({ data }: { data: UIComponent }) => {
  const handlePress = () => {
    // In a real app, this would trigger a navigation event
    Alert.alert('Action Triggered', `Action: ${data.action}`);
  };

  return (
    <TouchableOpacity 
      onPress={handlePress} 
      style={[styles.button, data.style as ViewStyle]}
    >
      <Text style={styles.text}>{data.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});