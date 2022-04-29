import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
export default function PodcastsCategory({route}) {
  const navigation = useNavigation();
  const data = route.params.podcast;
  console.log(data);
  const renderItem = ({item}) => {
    return (
      <View style={{left: 5, backgroundColor: 'black'}}>
        <TouchableOpacity>
          <ImageBackground
            source={item.img}
            style={{margin: 5, height: 65, width: 180}}
            imageStyle={{borderRadius: 10}}>
            <Text
              style={{
                color: 'white',
                top: 20,
                left: 5,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              {item.text}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'black', flex: 0.1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.icon}
            source={require('../assests/images/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Podcast Categories</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: '20%',
        }}>
        <FlatList data={data} renderItem={renderItem} numColumns={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  icon: {
    height: 20,
    width: 20,
    top: 40,
    left: 15,
    tintColor: 'white',
    // backgroundColor: 'yellow',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    top: '100%',
    left: '5%',
  },
});
