import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import { HeaderLogIn } from './src/components/common';
import LibraryList from './src/components/LibraryList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <HeaderLogIn headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}