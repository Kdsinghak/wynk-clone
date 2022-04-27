import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MymusicHeader from '../components/mymusicHeader';

export default function MyMusic() {
  const data = useSelector(store => store.RecentlyPlayed);
  // console.log('data', data);
  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <View>
        <View style={styles.imgcon}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={item.img} style={styles.imgstyle} />
          </TouchableOpacity>
        </View>
        <Text numberOfLines={0.1} style={styles.txtstyle}>
          {item.txt}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MymusicHeader />
      </View>
      <Text style={styles.heading}>𝗥𝗲𝗰𝗲𝗻𝘁𝗹𝘆 𝗣𝗹𝗮𝘆𝗲𝗱 𝗦𝗼𝗻𝗴𝘀</Text>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
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
