/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header';
import Contents from './src/components/contents';
import Authentication from './src/components/authentication';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      authPassed: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        {this.state.authPassed ? <Contents/> : <Authentication />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
