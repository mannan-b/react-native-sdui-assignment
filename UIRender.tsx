import React from 'react';
import { View, Text } from 'react-native';
import { UIComponent } from './types';
import { SDText } from './components/SDText';
import { SDImage } from './components/SDImage';
import { SDButton } from './components/SDButton';
const componentRegistry: Record<string, React.FC<{ data: UIComponent }>> = {
  'text': SDText,
  'image': SDImage,
  'button': SDButton,
};

interface RendererProps {
  components: UIComponent[];
  appState: Record<string, boolean>;
}

export const UIRenderer = ({ components, appState }: RendererProps) => {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      {components.map((componentData, index) => {
        if (componentData.visibleIf && !appState[componentData.visibleIf]) {
          return null; 
        }

        const ComponentToRender = componentRegistry[componentData.type];

        if (ComponentToRender) {
          return <ComponentToRender key={index} data={componentData} />;
        }

        return <Text key={index}>Unknown Component: {componentData.type}</Text>;
      })}
    </View>
  );
};