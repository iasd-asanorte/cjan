import React from 'react'
import styles from './styles';
import { 
  View, 
  Text 
} from 'react-native';

const monthNames = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out','Nov', 'Dez']

const Schedule = ({title, local, date}) => {
  const day = date.split('/')[0]
  const month = monthNames[date.split('/')[1] - 1]
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Próximo evento: {date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.local}>{local}</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.month}>{month}</Text>        
        <Text style={styles.day}>{day}</Text>
      </View>
    </View>
  )
}

export default Schedule