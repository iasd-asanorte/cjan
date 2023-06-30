import React, { useEffect } from 'react'
import { Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartScreen = ({navigation}) => {

  useEffect(() => {    
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if(token !== null){
          // validate token
          navigation.navigate('Home');
      }else{
          navigation.navigate('Login');          
      }
    }
    checkToken()
  }, [])

  return (
    <Text>StartScreen</Text>
  )
}

export default StartScreen