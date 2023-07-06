import React from 'react'
import styles from './styles';
import { 
  View, 
  Text 
} from 'react-native';

const Schedule = () => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.subtitle}>Próximo evento:</Text>
        <Text style={styles.title}>Cantata de natal</Text>
        <Text style={styles.local}>Iasd Asa norte</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.weekday}>DOM</Text>
        <Text style={styles.day}>25</Text>
        <Text style={styles.month}>DEZ</Text>
      </View>
    </View>
  )
}

export default Schedule