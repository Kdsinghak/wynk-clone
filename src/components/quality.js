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
  const [hdbutton, setHdbutton] = useState('white');
  const [highbutton, setHighbutton] = useState('white');
  const [mediumbutton, setMediumbutton] = useState('white');
  const [lowbutton, setLowbutton] = useState('white');
  const handleButton = id => {
    let newcolor;
    if (id === 1) {
      newcolor = hdbutton === 'white' ? 'blue' : 'white';
      setHdbutton(newcolor);
      setHighbutton('white');
      setMediumbutton('white');
      setLowbutton('white');
    }
    if (id === 2) {
      newcolor = highbutton === 'white' ? 'blue' : 'white';
      setHighbutton(newcolor);
      setHdbutton('white');
      setMediumbutton('white');
      setLowbutton('white');
    }
    if (id === 3) {
      newcolor = mediumbutton === 'white' ? 'blue' : 'white';
      setMediumbutton(newcolor);
      setHdbutton('white');
      setHighbutton('white');
      setLowbutton('white');
    }
    if (id === 4) {
      newcolor = lowbutton === 'white' ? 'blue' : 'white';
      setLowbutton(newcolor);
      setHdbutton('white');
      setHighbutton('white');
      setMediumbutton('white');
    }
  };

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
              <TouchableOpacity onPress={() => handleButton(1)}>
                <Image
                  style={[styles.img, {tintColor: hdbutton}]}
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
              <TouchableOpacity onPress={() => handleButton(2)}>
                <Image
                  style={[styles.img, {tintColor: highbutton}]}
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
              <TouchableOpacity onPress={() => handleButton(3)}>
                <Image
                  style={[styles.img, {tintColor: mediumbutton}]}
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
              <TouchableOpacity onPress={() => handleButton(4)}>
                <Image
                  style={[styles.img, {tintColor: lowbutton}]}
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
  },
});
