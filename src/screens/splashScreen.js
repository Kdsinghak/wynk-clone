import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
// import RootNavigator from '../navigation/rootNavigation';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Drawer');
  }, 1000);

  return (
    <View style={styles.splashcon}>
      <Image source={require('../assests/images/wynkLogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  splashcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
