import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import { UIRenderer } from './UIRender';
import { ServerResponse } from './types';

//Mock JSON
const MOCK_API_RESPONSE = {
  "screen": "promo_page",
  "components": [
    { 
      "type": "text", 
      "value": "Welcome to Pizza Week!", 
      "style": { "fontSize": 24, "color": "#FF5733", "marginBottom": 20 } 
    },
    { 
      "type": "image", 
      "url": "https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-81835.jpg",
      "style": { "borderRadius": 10, "marginBottom": 20 }
    },
    { 
      "type": "button", 
      "text": "Order Now", 
      "action": "navigate_to_menu" 
    }
  ]
};

export default function App() {
  const [data, setData] = useState<ServerResponse | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setData(MOCK_API_RESPONSE as ServerResponse);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {data ? (
        <UIRenderer components={data.components} />
      ) : (
        <ActivityIndicator size="large" color="#FF5733" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});