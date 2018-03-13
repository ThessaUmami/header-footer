import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Header from './src/Header';
import Footer from './src/Footer';
import Sales from './src/Sales';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Sales />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#b12727'
  }
})

AppRegistry.registerComponent('ThessaUmami', () => App);
