import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
// import HomeScreen from '../screens/HomeScreen';
import splashScreen from '../screens/splashScreen';
import TabNavigation from './tabNavigation/tabNavigation';
import Update from '../screens/update';
import Setting from '../screens/setting';
import DrawerNavigation from './drawerNavigation/drawerNavigation';
// import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
// const Drawer= createDrawerNavigator()
export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{header: null}}
        />
        {/* <Stack.Screen name="TabNavigation" component={TabNavigation} /> */}
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Setting" component={Setting} />

        {/* <Drawer.Navigator
          screenOptions={{drawerType: 'front'}}></Drawer.Navigator> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
