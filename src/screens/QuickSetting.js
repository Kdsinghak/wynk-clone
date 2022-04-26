import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Quality from '../components/quality';
import MusicLanguage from '../components/musicLanguage';
export default function QuickSetting() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Text style={styles.settingHeader}>𝗤𝘂𝗶𝗰𝗸 𝘀𝗲𝘁𝘁𝗶𝗻𝗴𝘀</Text>
      <View style={styles.modalview}>
        <Text style={styles.modalTxt}>Download Quality</Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image
            style={styles.img}
            source={require('../assests/images/next.png')}
          />
        </TouchableOpacity>
        <Quality
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={styles.modalview}>
        <Text style={styles.modalTxt}>Music Language(s)</Text>
        <TouchableOpacity
          onPress={() => {
            setVisible(false);
          }}>
          <Image
            style={styles.img}
            source={require('../assests/images/next.png')}
          />
        </TouchableOpacity>
      </View>
      <MusicLanguage visible={visible} setVisible={setVisible} />
      <View style={styles.modalview}>
        <Text style={styles.modalTxt}> Sleep Timer </Text>
        <Switch
          trackColor={{false: '#767577', true: '#002e4d'}}
          value={isEnabled}
          thumbColor={isEnabled ? '#006bb3' : '#cccccc'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          style={[{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}, {right: 10}]}
        />
      </View>
      <View style={styles.modalview}>
        <Text style={styles.settingtxt}>View All Settings </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image
            source={require('../assests/images/next.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingHeader: {
    color: 'white',
    paddingTop: 20,
    fontSize: 18,
    left: 10,
  },
  modalTxt: {
    color: 'white',
    padding: 10,
    fontSize: 12,
  },
  modalview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  img: {
    height: 20,
    width: 20,
    tintColor: 'white',
    top: 10,
    marginRight: 20,
  },
  settingtxt: {
    color: 'red',
    fontSize: 12,
    padding: 10,
  },
});
