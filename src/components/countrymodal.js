import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Countrymodal(props) {
  const {visible, setVisible} = props;

  const [country, setCountry] = useState([]);

  console.log('Func', props.onCloseModal);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json',
    )
      .then(res => res.json())
      .then(resp => {
        setCountry(resp);
        console.log(resp);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          props.country(item);
          setVisible(!visible);
        }}>
        <View style={styles.txtView}>
          <View style={{width: '40%'}}>
            <Text style={styles.txt}>{item.name}</Text>
          </View>
          <View
            style={{
              width: '60%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.txt, {marginLeft: 40}]}>{item.code}</Text>

            <Text style={styles.txt}>{item.dial_code}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.flatListView}>
        <FlatList
          style={{flex: 0.5}}
          data={country}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
    left: 30,
  },
  txt: {
    color: 'grey',
  },

  flatListView: {
    top: '35%',
    flex: 0.6,
    backgroundColor: 'black',
  },

  card: {
    flexDirection: 'row',
    padding: 10,
    // backgroundColor: 'red',
    // width: '80%',
    // justifyContent: 'space-between',
  },
  txtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '',
    width: '95%',
  },
});
