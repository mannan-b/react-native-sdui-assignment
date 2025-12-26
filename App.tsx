import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { UIRenderer } from './UIRender';
import { ServerResponse } from './types';

const MOCK_API_RESPONSE = {
  "screen": "promo_page",
  "components": [
    { 
      "type": "text", 
      "value": "Welcome to Pizza Week!", 
      "style": { "fontSize": 24, "color": "#FF5733", "fontWeight": "bold", "marginBottom": 10 } 
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
    },
    { 
      "type": "button", 
      "text": "Unlock Secret Menu", 
      "action": "unlock_vip",
      "visibleIf": "isVIP",
      "style": { "marginTop": 15, "backgroundColor": "#333" } 
    }
  ]
};

export default function App() {
  const [data, setData] = useState<ServerResponse | null>(null);
  const userState = {
    isLoggedIn: true,
    isVIP: true,
  };

  useEffect(() => {
    setTimeout(() => {
      setData(MOCK_API_RESPONSE as ServerResponse);
    }, 500);
  }, []);

  const handleAction = (action: string) => {
    if (action === 'navigate_to_menu') {
      Alert.alert("Navigation", "Opening the Pizza Menu...");
    } else if (action === 'unlock_vip') {
      Alert.alert("VIP Access", "Secret menu unlocked! 🔓");
    } else {
      Alert.alert("Unknown Action", action);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {data ? (
        <UIRenderer {...({ components: data.components, appState: userState, onAction: handleAction } as any)} />
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
    padding: 20,
  },
});