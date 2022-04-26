import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import newrelease from '../assests/data/newRelease';
export default function NewRelease() {
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
      <Text style={styles.heading}>𝗡𝗲𝘄 𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝘀</Text>
      <FlatList
        data={newrelease}
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
