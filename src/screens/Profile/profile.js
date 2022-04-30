import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
export default function Profile({route}) {
  const navigation = useNavigation();
  const data = useSelector(store => store.profileReducer);
  const dispatch = useDispatch();
  const [{img}] = data;
  const {number, countryData} = route.params;
  const newnumber = countryData.dial_code + '-' + number;

  const [Email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSave = () => {
    dispatch({
      type: 'ADD',
      payload: {img: img, email: Email, name: name, number: newnumber},
    });
    navigation.navigate('Setting');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting');
          }}>
          <Image
            style={styles.icon}
            source={require('../../assests/images/left-arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>My Profile</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.savebtn}>Save</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'flex-start',
        }}>
        <TouchableOpacity>
          <Image
            source={img}
            style={{
              height: 80,
              width: 80,
              tintColor: 'grey',
              top: '30%',
              left: '40%',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 55,
            width: '90%',
            borderBottomWidth: 2,
            borderColor: 'grey',
            top: '10%',
            left: '5%',
          }}>
          <Text style={{color: 'grey', paddingBottom: 5}}>Phone Number</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              value={newnumber}
              placeholder={newnumber}
              placeholderTextColor={'white'}
              style={{
                color: 'white',
                height: 30,
                width: '80%',
                paddingTop: 5,
              }}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assests/images/pencil.png')}
                style={{
                  tintColor: 'grey',
                  height: 15,
                  width: 15,
                  top: 9,
                  right: '40%',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 55,
            width: '90%',
            borderBottomWidth: 2,
            borderColor: 'grey',
            marginTop: '30%',
            left: '5%',
          }}>
          <Text style={{color: 'grey', paddingBottom: 5}}>Full Name</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              value={name}
              placeholder={'null null'}
              placeholderTextColor={'white'}
              onChangeText={value => setName(value)}
              style={{
                color: 'white',
                height: 30,
                width: '80%',
                paddingTop: 5,
              }}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assests/images/pencil.png')}
                style={{
                  tintColor: 'grey',
                  height: 15,
                  width: 15,
                  top: 9,
                  right: '40%',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 55,
            width: '90%',
            borderBottomWidth: 2,
            borderColor: 'grey',

            marginTop: '15%',
            left: '5%',
          }}>
          <Text style={{color: 'grey', paddingBottom: 5}}>Email Address</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              value={Email}
              placeholder={'Enter your Email address here'}
              placeholderTextColor={'white'}
              onChangeText={value => setEmail(value)}
              style={{
                color: 'white',
                height: 30,
                width: '80%',
                paddingTop: 5,
              }}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assests/images/pencil.png')}
                style={{
                  tintColor: 'grey',
                  height: 15,
                  width: 15,
                  top: 9,
                  right: '40%',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: '13%',
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '10%',
  },
  icon: {
    height: 20,
    width: 20,
    left: '40%',
    tintColor: 'white',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    right: '60%',
  },
  savebtn: {
    right: '70%',
    color: 'red',
    backgroundColor: '#1a1a1a',
    padding: 5,
  },
});
