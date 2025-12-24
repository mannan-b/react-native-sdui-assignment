import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { UIComponent } from './../types';

export const SDImage = ({ data }: { data: UIComponent }) => {
  return (
    <Image 
      source={{ uri: data.url }} 
      style={{ width: 200, height: 200, ...data.style } as ImageStyle} 
      resizeMode="contain"
    />
  );
};