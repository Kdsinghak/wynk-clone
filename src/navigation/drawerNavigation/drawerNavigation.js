import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from '../../screens/setting';
import TabNavigation from '../tabNavigation/tabNavigation';
import DrawerItems from '../../screens/DrawerItems';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerItems />}
      screenOptions={{drawerType: 'front', headerShown: false}}>
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}
