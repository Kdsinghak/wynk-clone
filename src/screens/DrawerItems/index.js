import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
const DrawerItems = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Wynk Music</Text>
        <View style={{top: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <View style={styles.Home}>
              <Image
                style={styles.icon}
                source={require('../../assests/images/homefill.png')}
              />
              <Text style={styles.txt}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Home}>
              <Image
                style={styles.icon}
                source={require('../../assests/images/language.png')}
              />
              <Text style={styles.txt}>Change Language</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <View style={styles.Home}>
              <Image
                style={styles.icon}
                source={require('../../assests/images/setting.png')}
              />
              <Text style={styles.txt}>Setting</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DrawerItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  },
  Home: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    height: 50,
    top: 10,
  },
  txt: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 17,
    top: 18,
  },
  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
    top: 18,
    marginHorizontal: 15,
  },
});
