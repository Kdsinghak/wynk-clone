import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import library from '../assests/data/library';

export default function Library() {
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
                resizeMode: 'contain',
                borderRadius: 5,
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
          }}>
          {item.txt}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.heading}>𝗬𝗼𝘂𝗿 𝗟𝗶𝗯𝗿𝗮𝗿𝘆</Text>
      <FlatList
        data={library}
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
});
