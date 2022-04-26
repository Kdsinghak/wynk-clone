import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export default function SettingHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={styles.img}
          source={require('../assests/images/left-arrow.png')}
        />
      </TouchableOpacity>
      <Text style={styles.txt}>𝗦𝗲𝘁𝘁𝗶𝗻𝗴𝘀</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 0.13,
    flexDirection: 'row',
  },
  img: {
    top: 40,
    height: 20,
    width: 20,
    left: 10,
    tintColor: 'white',
  },
  txt: {
    color: 'white',
    top: 34,
    left: 50,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
