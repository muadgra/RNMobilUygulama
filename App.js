import React from 'react';
import { registerRootComponent } from 'expo';
import AppContainer from './AppContainer';
import { AppRegistry } from 'react-native';
export default function App() {
  return (
    <AppContainer/>
  );
}

AppRegistry.registerComponent('ProjeOdevi', () => App);