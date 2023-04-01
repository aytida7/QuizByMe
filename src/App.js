import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigators from './navigators/AuthStackNavigators';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigators />
    </NavigationContainer>
  );
};

export default App;
