import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import splashScreen from '../screens/splashScreen';
import Update from '../screens/update';
import Setting from '../screens/setting';
import DrawerNavigation from './drawerNavigation/drawerNavigation';
import Login from '../screens/Profile/login';
import PodcastsCategory from '../screens/podcastsCategory';
import Profile from '../screens/Profile/profile';
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PodcastsCategory" component={PodcastsCategory} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
