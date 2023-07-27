import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import RaddioButton from '../RadioButton'
import styles from './styles'

const RadioGroup = ({data, onSelect}) => {
    const [userOption, setUserOption] = useState();
    const isSelected = (value) => {
        return value === userOption;
    }
    const handleSelect = (value) => {
        setUserOption(value);
        onSelect(value);
    }
    return (
        <View style={styles.container}>
            {data.map((item) => (
                <TouchableOpacity onPress={() => handleSelect(item.value)} key={item.id}>
                    <RaddioButton selected={isSelected(item.value)} value={item.value} />
                </TouchableOpacity>
            ))}        
        </View>
    )
}

export default RadioGroup