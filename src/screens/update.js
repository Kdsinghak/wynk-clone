import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import UpdateHeader from '../components/updateHeader';
import updates from '../assests/data/updates';
export default function MyMusic() {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.card}>
          <Image style={styles.img} source={item.img} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Text style={styles.txt1}>{item.txt1}</Text>
              <Text style={styles.txt2}>{item.txt2}</Text>
            </View>
            <View style={{flexDirection: 'row', top: 10, left: 25}}>
              <Text style={styles.goTxt}>Go</Text>
              <TouchableOpacity>
                <Image
                  style={styles.nextIcon}
                  source={require('../assests/images/next.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <UpdateHeader />

      <View style={styles.container}>
        <FlatList data={updates} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // marginTop: 100,
  },

  card: {
    borderColor: 'white',
    borderTopWidth: 0.2,

    paddingTop: 20,
  },
  img: {
    width: '90%',
    height: 230,
    resizeMode: 'stretch',
    bottom: 10,
    left: 20,
  },
  txt1: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    padding: 5,
  },
  txt2: {
    color: 'grey',
    fontSize: 10,
    textAlign: 'center',
    paddingBottom: 20,
  },
  goTxt: {
    color: 'red',
    fontWeight: 'bold',
  },
  nextIcon: {
    height: 20,
    width: 20,
    tintColor: 'white',
    left: 20,
  },
});
