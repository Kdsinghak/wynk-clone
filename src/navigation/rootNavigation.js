import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import HomeScreen from '../screens/HomeScreen';
import splashScreen from '../screens/splashScreen';
import TabNavigation from './tabNavigation/tabNavigation';
import Header from '../components/header';
import Update from '../screens/update';
import Setting from '../screens/setting';
const Stack = createNativeStackNavigator();

export default function RootNavigator({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />

        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
