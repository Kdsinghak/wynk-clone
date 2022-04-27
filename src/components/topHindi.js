import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import hindiTop from '../assests/data/hindiTop';
export default function HindiTop() {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.imgcon}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={item.img} style={styles.imgstyle} />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={0.1} style={styles.txtstyle}>
          {item.song}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>𝗛𝗶𝗻𝗱𝗶 𝗧𝗼𝗽 𝟱𝟬</Text>
      <FlatList
        data={hindiTop}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    top: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
  },
  imgcon: {
    height: 120,
    width: 120,
    top: 10,
  },
  imgstyle: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  txtstyle: {
    color: 'white',
    fontSize: 10,
    paddingTop: 5,
    fontWeight: 'bold',
  },
});
