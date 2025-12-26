import React from 'react';
import { Text } from 'react-native';
import { Theme, UIComponent } from '../types';

export const SDText = ({ data, theme }: { data: UIComponent, theme: Theme }) => {
  return (
    <Text style={[
  { color: theme.textColor },
  data.style
]}>
      {data.value}
    </Text>
  );
};