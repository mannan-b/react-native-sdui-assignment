import React from 'react';
import { View, Text } from 'react-native';
import { UIComponent, Theme } from './types';
import { SDText } from './components/SDText';
import { SDImage } from './components/SDImage';
import { SDButton } from './components/SDButton';

const componentRegistry: Record<string, React.FC<any>> = {
  'text': SDText,
  'image': SDImage,
  'button': SDButton,
};

interface RendererProps {
  components: UIComponent[];
  appState: Record<string, boolean>;
  onAction?: (action: string) => void;
  theme: Theme;
}

export const UIRenderer = ({ components, appState, onAction, theme }: RendererProps) => {
  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      {components.map((componentData, index) => {
        if (componentData.visibleIf && !appState[componentData.visibleIf]) return null;

        const ComponentToRender = componentRegistry[componentData.type];

        if (ComponentToRender) {
          return (
            <ComponentToRender 
              key={index} 
              data={componentData} 
              onAction={onAction}
              theme={theme} 
            />
          );
        }
        return null;
      })}
    </View>
  );
};