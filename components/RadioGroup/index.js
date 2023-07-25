import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import RaddioButton from '../RadioButton'
import styles from './styles'

const RadioGroup = ({data}) => {
    const [userOption, setUserOption] = useState();
    return (
        <View style={styles.container}>
            {data.map((item) => (
                <TouchableOpacity onPress={() => setUserOption(item.value)} key={item.value}>
                    <RaddioButton selected={item.selected} value={item.value} />
                </TouchableOpacity>
            ))}
        <Text> User option: {userOption}</Text>
        </View>
    )
}

export default RadioGroup