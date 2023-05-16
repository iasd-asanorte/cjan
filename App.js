import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation'

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="auto"/>
    </>
  )
}

export default App
