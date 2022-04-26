import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/header';
import {SliderBox} from 'react-native-image-slider-box';
import Top_picks from '../../assests/data/Top_picks';
import Mix from '../../components/mix';
import NewRelease from '../../components/newRelease';
import HindiTop from '../../components/topHindi';
import Artist from '../../components/artist';
import Library from '../../components/library';
import MusicLanguage from '../../components/musicLanguage';
import Quality from '../../components/quality';
import QuickSetting from '../QuickSetting';

export default function Home({navigation}) {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.txt}>𝗪𝘆𝗻𝗸 𝗧𝗼𝗽 𝗣𝗶𝗰𝗸𝘀</Text>
        <View style={styles.slidercon}>
          <SliderBox
            resizeMode="contain"
            images={Top_picks.images}
            SliderBoxHeight={200}
            dotColor="white"
            inactiveDotColor="#90A4AE"
            paginationBoxStyle={{
              paddingVertical: 20,
            }}
            autoplay
            circleLoop
            ImageComponentStyle={{width: '98%'}}
          />
        </View>
        <Mix />
        <NewRelease />
        <HindiTop />
        <Artist />
        <Library />
        <Text style={styles.langtxt}>𝗠𝘂𝘀𝗶𝗰 𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲</Text>
        <View
          style={{
            top: 10,
            left: 10,
            width: '95%',
            height: 40,
            backgroundColor: '#666666',
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'white',
              paddingLeft: 10,
              top: 10,
            }}>
            View All Languages
          </Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Image
              style={styles.img}
              source={require('../../assests/images/next.png')}
            />
          </TouchableOpacity>
          <MusicLanguage visible={visible} setVisible={setVisible} />
        </View>
        <QuickSetting />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
  },
  slidercon: {
    borderRadius: 20,
    height: 150,
  },
  langtxt: {
    paddingTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 5,
  },
  img: {
    height: 20,
    width: 20,
    tintColor: 'white',
    top: 10,
    marginRight: 20,
  },
  settingHeader: {
    color: 'white',
    paddingTop: 20,
    fontSize: 18,
    left: 10,
  },
  modalTxt: {
    color: 'white',
    padding: 10,
  },
  modalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
