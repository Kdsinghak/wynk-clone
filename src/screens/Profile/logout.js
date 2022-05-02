import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
export default function Logout() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {img: '', email: '', name: '', number: ''},
    });
    navigation.navigate('Home');
    console.log('logout');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.txt}>Are you want to LOGOUT?</Text>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <Text style={styles.txt}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerView: {
    flex: 0.5,
    backgroundColor: 'black',
    top: '30%',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 15,
    top: '15%',
    alignItems: 'center',
    width: '60%',
    borderRadius: 8,
  },
});
