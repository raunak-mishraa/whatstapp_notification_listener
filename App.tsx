import { View, Text } from 'react-native'
import React from 'react'
import GetStart from './src/components/GetStart'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/Main';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStart">
        {/* <Stack.Screen 
          name="GetStart" 
          component={GetStart}
          options={{ headerShown: false }}
          /> */}
        <Stack.Screen 
          name="MainPage" 
          component={Main}
          options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App