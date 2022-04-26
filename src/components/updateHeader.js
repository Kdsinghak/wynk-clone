import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function UpdateHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backimg}
            source={require('../assests/images/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.txt}>𝗨𝗽𝗱𝗮𝘁𝗲𝘀</Text>
        <Image
          style={styles.searchimg}
          source={require('../assests/images/search.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'black',
  },
  headerView: {
    flexDirection: 'row',
  },
  backimg: {
    top: 40,
    left: 20,
    height: 20,
    width: 20,
    tintColor: 'white',
  },
  txt: {
    left: 50,
    top: 39,
    color: 'white',
    fontSize: 20,
    letterSpacing: 1,
  },
  searchimg: {
    tintColor: 'white',
    height: 25,
    width: 25,
    top: 44,
    marginLeft: '55%',
  },
});
