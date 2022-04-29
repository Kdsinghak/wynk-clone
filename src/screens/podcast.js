import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PodcastHeader from '../components/podcastHeader';
import podcast from '../assests/data/podcasts';
import {useNavigation} from '@react-navigation/native';
export default function Podcast() {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={{left: 5}}>
        <TouchableOpacity>
          <ImageBackground
            source={item.img}
            style={{margin: 5, height: 65, width: 150}}
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
      <PodcastHeader />
      <View style={{backgroundColor: 'black', flex: 2}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.heading}>𝗕𝗿𝗼𝘄𝘀𝗲 𝗕𝘆 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PodcastsCategory', {podcast: podcast})
            }>
            <Text style={{color: 'grey', right: 20, top: 15, fontSize: 12}}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            flex: 1,
          }}
          data={podcast}
          renderItem={renderItem}
          horizontal

          // numColumns={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    left: 7,
  },
});
