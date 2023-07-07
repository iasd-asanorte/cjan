import React, { useEffect } from 'react'
import { 
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Schedule from '../components/Schedule';
import styles from '../theme/homeStyles';

const event = {
  title: 'Cantata de Natal',
  local: 'Iasd Asa Norte',
  date: '25/12/2020',
}

const HomeScreen = ({navigation}) => {

  useEffect(() => {    
    
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaque</Text>
      <Schedule title={event.title} local={event.local} date={event.date} />   
      <Text style={styles.title}>Atividade Recente</Text>
    </View>
  );
}

export default HomeScreen