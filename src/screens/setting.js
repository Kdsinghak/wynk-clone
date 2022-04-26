import {View, Text, StyleSheet, Image, Switch, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SettingHeader from '../components/settingHeader';

export default function Setting() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <SettingHeader />
      <ScrollView style={styles.innercontainer}>
        <Text style={styles.heading}>𝗠𝘂𝘀𝗶𝗰 𝗟𝗶𝘀𝘁𝗲𝗻𝗶𝗻𝗴 𝗣𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲𝘀</Text>
        <View style={styles.cardView}>
          <Text style={styles.txt}>Music Language(s)</Text>
          <Image
            style={styles.icon}
            source={require('../assests/images/next.png')}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.txt}>On Click Behaviour - List</Text>
          <Image
            style={styles.icon}
            source={require('../assests/images/next.png')}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.txt}>Streaming Quality</Text>
          <Image
            style={styles.icon}
            source={require('../assests/images/next.png')}
          />
        </View>
        <View style={styles.cardView}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.txt}>Equalizer</Text>
            <Text style={styles.innertxt}>Adjust audio settings</Text>
          </View>
          <Image
            style={styles.icon}
            source={require('../assests/images/next.png')}
          />
        </View>
        <View style={styles.cardView}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.txt}>Offline songs on slow internet</Text>
            <Text style={styles.innertxt}>
              Play download and mp3 songs only
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#002e4d'}}
            value={isEnabled}
            thumbColor={isEnabled ? '#006bb3' : '#cccccc'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            style={[{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}]}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.txt}>Sleep Timer</Text>

          <Switch
            trackColor={{false: '#767577', true: '#002e4d'}}
            value={isEnabled}
            thumbColor={isEnabled ? '#006bb3' : '#cccccc'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            style={[{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}]}
          />
        </View>
        <Text style={styles.heading}>𝐎𝐟𝐟𝐥𝐢𝐧𝐞 𝐌𝐮𝐬𝐢𝐜 𝐩𝐫𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬</Text>
        <View style={styles.cardView}>
          <Text style={styles.txt}>Download Quality </Text>
          <Image
            style={styles.icon}
            source={require('../assests/images/next.png')}
          />
        </View>
        <Text style={styles.heading}>𝗣𝗿𝗼𝗳𝗶𝗹𝗲</Text>
        <View>
          <View style={styles.cardView}>
            <Text style={styles.txt}>My Profile </Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
          <View style={styles.cardView}>
            <Text style={styles.txt}>Help & Support </Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
          <View style={styles.cardView}>
            <Text style={styles.txt}>Logout</Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innercontainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  heading: {
    color: 'white',
    letterSpacing: 0.5,
    fontWeight: 'bold',
    fontSize: 17,
    left: 20,
  },
  txt: {
    color: 'white',
    fontSize: 13,
  },
  innertxt: {
    color: 'grey',
    fontSize: 10,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: 'white',
  },
});
