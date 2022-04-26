import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import MymusicHeader from '../components/mymusicHeader';
export default function MyMusic() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MymusicHeader />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
