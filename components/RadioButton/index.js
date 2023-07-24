import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'

const RaddioButton = ({name, selected, value }) => {
    const [isSelected, setSelected] = useState(selected)        

  return (
    // create a raddion button component
    <View style={styles.container}>
        <View style={styles.radioCircle}>
            {isSelected 
                ? <Ionicons name="radio-button-on" size={24} color="white" /> 
                : <Ionicons name="radio-button-off" size={24} color="white" /> 
            }
        </View>
        <Text style={styles.radioText}>{value}</Text>
    </View>

  )
}

export default RaddioButton