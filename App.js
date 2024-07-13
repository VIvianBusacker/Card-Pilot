import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './index'; // Assuming your HomeScreen is in index.tsx
import TabTwoScreen from './explore'; // Assuming your TabTwoScreen is in explore.tsx

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ApplicationForm" component={TabTwoScreen} /> {/* Rename to TabTwoScreen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
