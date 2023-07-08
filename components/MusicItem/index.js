import React from 'react'
import styles from './styles';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const MusicItem = ({image, title, artist}) => {
  return (
    
    <TouchableOpacity style={styles.container}>
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

