/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import Header from './src/components/Header';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

class App extends Component
{
  render(): React.ReactNode {
    return(
      <>
        <Header/>
        <Routes/>
        <StatusBar backgroundColor={'#000'}/>
      </>
    );
  }
}

export default App;