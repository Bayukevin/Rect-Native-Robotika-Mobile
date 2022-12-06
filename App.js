// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouterNav from './src/routers/RouterNav';

function App() {
  return (
    <NavigationContainer>
      <RouterNav />
    </NavigationContainer>
  );
}

export default App;