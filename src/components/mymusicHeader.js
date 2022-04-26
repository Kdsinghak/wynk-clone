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

export default function MymusicHeader() {
  return (
    <SafeAreaView style={styles.headerCon}>
      <View style={styles.imgcon}>
        <View style={styles.txtView}>
          <TouchableOpacity>
            <Text style={styles.txt}>NN</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>𝗠𝘆 𝗠𝘂𝘀𝗶𝗰</Text>
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
    height: '22%',
    backgroundColor: 'black',
  },
  txtView: {
    backgroundColor: '#0066cc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    height: 60,
    width: 60,
    left: 20,
    top: 5,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
  },
  imgcon: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  heading: {
    color: 'white',
    top: 16,
    fontSize: 25,
    paddingLeft: 40,
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
