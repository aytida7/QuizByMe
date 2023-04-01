import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AddQuestionScreen, CreateQuizScreen, HomeScreen} from '../screens';
import Temp from '../screens/Temp';
import {PlayScreen} from '../screens';

const Stack = createStackNavigator();

function AuthStackNavigators() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Temp" component={Temp} />
      <Stack.Screen name="CreateQuizScreen" component={CreateQuizScreen} />
      <Stack.Screen name="AddQuestionScreen" component={AddQuestionScreen} />
      <Stack.Screen name="PlayScreen" component={PlayScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigators;
