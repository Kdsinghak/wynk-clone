import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SettingHeader from '../components/settingHeader';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
export default function Setting() {
  const navigation = useNavigation();
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const data = useSelector(store => store.profileReducer);

  const [{name, number, email}] = data;
  const toggleSwitch = id => {
    if (id === 1) setIsEnabled1(previousState => !previousState);
    if (id === 2) setIsEnabled2(previousState => !previousState);
  };

  const handleNavigation = name => {
    console.log('name is', name);
    name === '' || name === undefined
      ? navigation.navigate('Login')
      : navigation.navigate('Profile', {
          number: number,
          _name: name,
          _email: email,
        });
  };

  return (
    <View style={styles.container}>
      <SettingHeader />
      <ScrollView style={styles.innercontainer}>
        <Text style={styles.heading}>𝗠𝘂𝘀𝗶𝗰 𝗟𝗶𝘀𝘁𝗲𝗻𝗶𝗻𝗴 𝗣𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲𝘀</Text>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.txt}>Music Language(s)</Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.txt}>On Click Behaviour - List</Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.txt}>Streaming Quality</Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
        </TouchableOpacity>
        <View style={styles.cardView}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.txt}>Offline songs on slow internet</Text>
            <Text style={styles.innertxt}>
              Play download and mp3 songs only
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#002e4d'}}
            value={isEnabled1}
            thumbColor={isEnabled1 ? '#006bb3' : '#cccccc'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(1)}
            style={[{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}]}
          />
        </View>
        <View style={styles.cardView}>
          <Text style={styles.txt}>Sleep Timer</Text>

          <Switch
            trackColor={{false: '#767577', true: '#002e4d'}}
            value={isEnabled2}
            thumbColor={isEnabled2 ? '#006bb3' : '#cccccc'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(2)}
            style={[{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}]}
          />
        </View>
        <Text style={styles.heading}>𝐎𝐟𝐟𝐥𝐢𝐧𝐞 𝐌𝐮𝐬𝐢𝐜 𝐩𝐫𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬</Text>
        <TouchableOpacity>
          <View style={styles.cardView}>
            <Text style={styles.txt}>Download Quality </Text>
            <Image
              style={styles.icon}
              source={require('../assests/images/next.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.heading}>𝗣𝗿𝗼𝗳𝗶𝗹𝗲</Text>

        <View>
          <TouchableOpacity
            onPress={() => {
              handleNavigation(name);
            }}>
            <View style={styles.cardView}>
              <Text style={styles.txt}>My Profile </Text>
              {/* <TouchableOpacity/> */}

              <Image
                style={styles.icon}
                source={require('../assests/images/next.png')}
              />
              {/* </TouchableOpacity> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cardView}>
              <Text style={styles.txt}>Help & Support </Text>
              <Image
                style={styles.icon}
                source={require('../assests/images/next.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Logout');
            }}>
            <View style={styles.cardView}>
              <Text style={styles.txt}>Logout</Text>
              <Image
                style={styles.icon}
                source={require('../assests/images/next.png')}
              />
            </View>
          </TouchableOpacity>
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
