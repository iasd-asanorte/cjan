import React from 'react'
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import {default as globalStyles} from '../../theme/globalStyles'
import { Feather } from '@expo/vector-icons'
import colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native';


const ProfileItem = ({icon, item, subtitle, target}) => {
  const navigation = useNavigation();  
  const onPressItem = (url_target) => {    
    navigation.navigate(url_target)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => {onPressItem(target)}}>
      <Feather name={icon} size={20} color={colors.white} />
      <View style={styles.textContainer}>
        <Text style={globalStyles.text}>{item}</Text>
        <Text style={globalStyles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>    
  )
}

export default ProfileItem