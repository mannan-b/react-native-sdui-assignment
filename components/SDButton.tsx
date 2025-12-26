import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, ViewStyle } from 'react-native';
import { UIComponent } from './../types';

import { Theme } from '../types';

export const SDButton = ({ data, onAction, theme }: { data: UIComponent, onAction?: any, theme: Theme }) => {
  return (
    <TouchableOpacity 
      onPress={() => onAction?.(data.action)} 
      style={[
        styles.button, 
        { backgroundColor: theme.primaryColor }, 
        data.style as any
      ]}
    >
      <Text style={[styles.text, { color: theme.buttonTextColor }]}>
        {data.text}
      </Text>
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