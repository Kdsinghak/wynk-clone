import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export default function Loginheader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.icon}
            source={require('../assests/images/left-arrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.txt}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 0.12,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    top: 50,
    height: 20,
    width: 20,
    left: 20,
    tintColor: 'grey',
  },
  txt: {
    top: 50,
    color: 'grey',
    right: 20,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
