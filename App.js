import {View, Text, Image} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigation/rootNavigation';

import {Provider} from 'react-redux';
import store from './src/reducer/store';
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
