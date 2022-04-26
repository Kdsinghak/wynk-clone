import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

export default function Header({navigation}) {
  return (
    <SafeAreaView style={styles.headerCon}>
      <View style={styles.imgcon}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require('../assests/images/wynklogo2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Update')}>
          <Image
            style={styles.bell}
            source={require('../assests/images/notification.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputcon}>
        <Image
          style={styles.searchimg}
          source={require('../assests/images/search.png')}
        />
        <TextInput
          style={styles.text}
          placeholder="Artist,songs, podcast or hellotunes "
          placeholderTextColor={'white'}
          color="white"
        />
        <TouchableOpacity>
          <Image
            style={styles.micimg}
            source={require('../assests/images/microphone.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerCon: {
    // backgroundColor: 'red',
    height: '22%',
  },
  imgcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 30,
    width: 30,
    left: 20,
    tintColor: 'red',
  },
  bell: {
    height: 30,
    width: 30,
    right: 30,
    // backgroundColor: 'red',
    tintColor: 'white',
  },
  inputcon: {
    top: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#2F3330',
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    paddingLeft: 10,
  },
  searchimg: {
    height: 20,
    width: 20,
    tintColor: 'white',
    top: 15,
  },
  text: {
    width: '80%',
    paddingLeft: 10,
  },
  micimg: {
    top: 15,
    height: 20,
    width: 20,
    tintColor: 'white',
    position: 'absolute',
  },
});
