import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import artist from '../assests/data/artist';

export default function Artist() {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.imgcon}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={item.img}
              style={{
                height: 110,
                width: 110,
                // resizeMode: 'contain',
                borderRadius: 90,
                // backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 10,
            paddingTop: 5,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>𝗔𝗿𝘁𝗶𝘀𝘁</Text>
      <FlatList
        data={artist}
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
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imgcon: {
    height: 120,
    width: 120,
    top: 10,
  },
});
