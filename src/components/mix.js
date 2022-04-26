import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import mixes from '../assests/data/mixes';

export default function Mix() {
  const renderItem = ({item, index}) => {
    let colors = ['#63cf7a', '#c46f62', '#cc9b5c', '#ca5ccc'];
    return (
      <View style={styles.imgcon}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.Viewcont}>
            <ImageBackground source={item.img} style={styles.img}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  top: 60,
                }}>
                <View>
                  <Text style={styles.yourTxt}>Your</Text>
                  <Text
                    style={{
                      color: colors[index % colors.length],
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    Mix
                  </Text>
                </View>
                <Text style={styles.number}>{item.id}</Text>
              </View>
            </ImageBackground>
            <Text style={styles.imgTxt}>{item.txt}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>𝗬𝗼𝘂𝗿 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘇𝗲𝗱 𝗠𝗶𝘅𝗲𝘀</Text>
      <FlatList
        data={mixes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    marginTop: 20,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
  },

  imgcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: 'red',
  },
  img: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  imgTxt: {
    color: 'white',
    fontSize: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  yourTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    top: 10,
  },
});
