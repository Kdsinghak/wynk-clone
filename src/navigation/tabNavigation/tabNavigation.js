import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/homef/home';
import MyMusic from '../../screens/myMusic';
import Podcast from '../../screens/podcast';
// import Wynkstage from '../../screens/wynkstage';
import Hellotunes from '../../screens/hellotunes';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {backgroundColor: '#060606'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assests/images/homefill.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyMusic"
        component={MyMusic}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assests/images/my-music.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={Podcast}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assests/images/podcast.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Hellotunes"
        component={Hellotunes}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assests/images/hello_tunes.png')}
                style={styles.img}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Wynkstage"
        component={Wynkstage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assests/images/wynk-stage.png')}
                style={styles.stage}
              />
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  stage: {
    tintColor: 'white',
  },
});
