import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assests/images/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>My Profile</Text>
        <TouchableOpacity>
          <Text style={styles.savebtn}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'red', flex: 1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: '13%',
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 20,
    width: 20,
    top: '60%',
    left: '40%',
    tintColor: 'white',
  },
  heading: {
    top: '16%',
    fontSize: 20,
    // left: '20%',
    fontWeight: 'bold',
    color: 'white',
    right: '60%',
  },
  savebtn: {
    top: '60%',
    // left: '500',
    right: '70%',
    color: 'red',
    backgroundColor: '#1a1a1a',
    padding: 5,
  },
});
