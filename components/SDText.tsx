import React from 'react';
import { Text, TextStyle } from 'react-native';
import { UIComponent } from './../types';

export const SDText = ({ data }: { data: UIComponent }) => {
  return (
    <Text style={data.style as TextStyle}>
      {data.value}
    </Text>
  );
};