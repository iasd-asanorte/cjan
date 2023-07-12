import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { 
    Ionicons, 
    MaterialIcons,
    Entypo, 
} from '@expo/vector-icons';
import styles from '../theme/globalStyles';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
            <Text style={styles.status}>Reproduzindo</Text>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </View>
        <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b2731bc19036273a7b6598331b79'}} style={styles.image} />
        <View style={styles.music}>
            <Ionicons name="layers-outline" size={24} color="white" />
            <View style={styles.musicInfo}>
                <Text style={styles.title}>Pedaços</Text>
                <Text style={styles.artist}>Fernando Iglesias</Text>
            </View>
            <Entypo name="text" size={24} color="white" />
        </View>
        <View style={styles.progress}>
            <Text style={styles.progressTime}>0:00</Text>
            <View style={styles.progressLine}>
                <View style={styles.progressCircle} />
            </View>
            <Text style={styles.progressTime}>3:00</Text>
        </View>
        <View style={styles.controls}>
            <TouchableOpacity>
                <Ionicons name="repeat-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="play-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="play-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="play-forward-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>                    

    </View>
  )
}

export default PlayerScreen