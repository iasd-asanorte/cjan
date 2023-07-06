import React, { useEffect } from 'react'
import { 
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,

} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Schedule } from '../components/Schedule';

const HomeScreen = ({navigation}) => {

  useEffect(() => {    
    
  }, [])

  return (
    <View style={styles.screen}>
      <Schedule />
    </View>
  )
}

export default HomeScreen