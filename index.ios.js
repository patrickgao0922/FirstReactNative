/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MyScene from './MyScene';

export default class FirstReactNative extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <MyScene 
                    title={route.title}

                    onForward={() => {
                      const nextIndex = route.index +1
                      navigator.push({
                        title: 'Scene' + nextIndex,
                        index: nextIndex,
                      })
                    }}

                    onBack={() => {
                      if (route.index >0) {
                        navigator.pop()
                      }
                    }}
          />
        } }
        />
      // <View style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cell: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstReactNative', () => FirstReactNative);
