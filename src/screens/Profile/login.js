import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Option,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Loginheader from '../../components/loginheader';
import Countrymodal from '../../components/countrymodal';
import {useNavigation} from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [countryData, setCountryData] = useState({});
  const [number, setNumber] = useState('');
  const [color, setColor] = useState('#333333');
  const [isDisable, setIsdisable] = useState(true);

  const handleValidNumber = (val, obj) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (val.length === 0 && val.length > 10) {
      setColor('#333333');
      setIsdisable(true);
    } else if (phoneno.test(val) === false) {
      setColor('#333333');
      setIsdisable(true);
    } else if (phoneno.test(val) === true) {
      setColor('#0066ff');
      setIsdisable(false);
    } else if (Object.entries(obj).length === 0 && obj.constructor === Object) {
      setColor('#333333');
      setIsdisable(true);
    }
  };

  return (
    <View style={styles.container}>
      <Loginheader />
      <View style={styles.innerview}>
        <Text style={styles.heading}>Enter your mobile number</Text>
        <View style={styles.inputview}>
          <View
            style={{
              backgroundColor: '#333333',
              width: 80,
              borderRadius: 5,
              height: '95%',
            }}>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}>
              <View style={{top: 10}}>
                <Text style={[styles.txt, {paddingLeft: 10}]}>
                  {countryData.code}
                </Text>
                <Text style={styles.txt}>{countryData.dial_code}</Text>
              </View>
              <Image
                style={styles.icon}
                source={require('../../assests/images/down-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor={'grey'}
            keyboardType={'numeric'}
            value={number}
            onChangeText={value => {
              setNumber(value);
              handleValidNumber(value, countryData);
            }}
          />
        </View>

        <Countrymodal
          visible={visible}
          setVisible={setVisible}
          country={item => setCountryData(item)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: color}]}
          activeOpacity={0.8}
          disabled={isDisable}
          onPress={() => {
            navigation.navigate('Profile', {
              number: number,
              countryData: countryData,
            });
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerview: {
    top: '10%',
    backgroundColor: 'black',
    flex: 1,
    // position: 'absolute',
  },
  heading: {
    color: 'white',
    left: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
  phonetxt: {
    backgroundColor: 'black',
  },
  inputview: {
    flexDirection: 'row',
    top: 30,
    left: 20,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    width: '60%',
    borderRadius: 8,
    paddingLeft: 10,
    left: 30,
    color: 'white',
  },
  icon: {
    height: 20,
    width: 20,
    // top: 15,
    left: 50,
    bottom: 15,
    // backgroundColor: 'red',
    tintColor: 'grey',
  },
  txt: {
    left: 5,
    color: 'grey',
  },
  agreetxt: {
    color: 'white',
    fontSize: 11,
    paddingLeft: 20,
  },
  btn: {
    // backgroundColor: '#333333',
    // height: '20%',
    padding: 20,
    marginBottom: '30%',

    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    left: '15%',
    borderRadius: 8,
  },
});
