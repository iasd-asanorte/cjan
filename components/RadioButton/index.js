import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../theme/colors'

const RaddioButton = ({selected, value }) => {            

  const getColor = (selected) => {
    return selected ? colors.white : colors.neutro;
  }

  return (
    // create a raddion button component
    <View style={styles.container}>
        <View style={styles.radioCircle}>
            {selected 
                ? <Ionicons name="radio-button-on" size={24} color="violet" /> 
                : <Ionicons name="radio-button-off" size={24} color="grey" /> 
            }
        </View>
        <Text style={[styles.radioText, {color: `${getColor(selected)}`} ]}>{value}</Text>
    </View>

  )
}

export default RaddioButton