import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Update from './Screen/Update';
import SearchApi from './Screen/SearchApi';
import NewPractice from './Screen/NewPractice';
import Pract from './Screen/Pract';

const Stack = createNativeStackNavigator();
function App() {
    return (
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName="" screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="home" component={Home} />
       
        <Stack.Screen name='search' component={SearchApi} /> */}
         <Stack.Screen name='newPract' component={NewPractice} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
export default App
