import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import language from '../assests/data/Languages';
import Modal from 'react-native-modal';

const Item = ({item, onPress, backgroundColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, backgroundColor]}>
    <Text style={styles.langtxt}>{item.lang}</Text>
  </TouchableOpacity>
);

export default function MusicLanguage(props) {
  const [selectedId, setSelectedId] = useState(null);
  // const [visible, setVisible] = useState(false);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'blue' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
      />
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!props.visible}
      swipeDirection={'down'}
      onSwipeComplete={() => props.setVisible(!props.visible)}
      useNativeDriver={true}
      style={styles.modalMainSty}>
      <View style={styles.container}>
        <View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <Text style={styles.txt}>Select Music Language(s)</Text>
            <TouchableOpacity
              onPress={() => {
                props.setVisible(!props.visible);
              }}>
              <Text style={styles.txt}>X</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={{
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              marginHorizontal: 10,
              top: 20,
            }}
            numColumns={2}
            data={language}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            // extraData={selectedId}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21252d',
    padding: 20,
    flexDirection: 'column',
    top: 315,
  },

  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  langtxt: {
    color: 'white',
  },
  button: {
    width: 160,
    height: 40,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 15,
  },
  modalMainSty: {
    width: '100%',
    alignSelf: 'center',
  },
});
