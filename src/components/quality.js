import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

export default function Quality(props) {
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View style={styles.container}>
        <View style={styles.headingcon}>
          <Text style={styles.heading}>𝗦𝗲𝗹𝗲𝗰𝘁 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗤𝘂𝗮𝗹𝗶𝘁𝘆</Text>
          <TouchableOpacity
            onPress={() => {
              props.setModalVisible(false);
            }}>
            <Text style={styles.closebtn}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 20}}>
          <View style={styles.insideview}>
            <View style={styles.txtView}>
              <Text style={styles.txt1}>{'HD'}</Text>
              <Text style={styles.txt2}>{'320/256 kbps'}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Image
                  style={styles.img}
                  source={require('../assests/images/radio-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.insideview}>
            <View style={styles.txtView}>
              <Text style={styles.txt1}>{'High'}</Text>
              <Text style={styles.txt2}>{'128 kbps'}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Image
                  style={styles.img}
                  source={require('../assests/images/radio-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.insideview}>
            <View style={styles.txtView}>
              <Text style={styles.txt1}>{'Medium'}</Text>
              <Text style={styles.txt2}>{'64 kbps'}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Image
                  style={styles.img}
                  source={require('../assests/images/radio-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.insideview}>
            <View style={styles.txtView}>
              <Text style={styles.txt1}>{'Low'}</Text>
              <Text style={styles.txt2}>{'32 kbps'}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                }}>
                <Image
                  style={styles.img}
                  source={require('../assests/images/radio-button.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00001a',
    flex: 1,
    top: 400,
  },
  headingcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    paddingTop: 20,
  },
  closebtn: {
    color: 'white',
    fontSize: 20,
    left: 50,
    fontWeight: 'bold',
    top: 16,
    padding: 10,
  },
  insideview: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 10,
  },
  txt1: {
    color: 'white',
    fontWeight: 'bold',
  },
  txt2: {
    color: 'grey',
    fontSize: 10,
  },
  txtView: {
    left: 10,
  },
  img: {
    height: 30,
    width: 30,
    right: 30,
    tintColor: 'blue',
  },
});
