import React from 'react'
import styles from './styles';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MusicItem = ({image, title, artist}) => {
  const navigation = useNavigation();  
  const onPressItem = () => {    
    navigation.navigate('Player')
  }
  return (
    
    <TouchableOpacity style={styles.container} onPress={onPressItem}>
        <View style={styles.info}>
            <Image 
                style={styles.image} 
                source={{ uri: image }} 
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{artist}</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default MusicItem

