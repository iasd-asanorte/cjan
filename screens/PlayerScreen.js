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
import {default as playerStyles} from '../theme/playerStyles';
import colors from '../theme/colors';
import { Sound } from 'expo-av/build/Audio';

const music = {
    title: 'Pedaços',
    artist: 'Fernando Iglesias',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://i.scdn.co/image/ab67616d0000b2731bc19036273a7b6598331b79',
}

const PlayerScreen = ({navigation}) => {

    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);

    const onPlaybackStatusUpdate = (status) => {        
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playSound = async () => { 
        console.log('Loading Sound');
        if(sound) {
            await sound.unloadAsync();
        }
        const { sound } = await Sound.createAsync(
            { uri: music.audio },
            { shouldPlay: true },
            onPlaybackStatusUpdate
        );
        setSound(sound);
    }

    const onPlayPausePressed = () => {
        if (sound === null) {
            playSound();
        } else {
            if (isPlaying) {
                sound.pauseAsync();
            } else {
                sound.playAsync();
            }
        }
    }

    useEffect(() => {
        if (music !== null) {
            playSound();
        }
    }, []);

    const formatTime = (duration) => {
        const seconds = Math.floor(duration / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    };

    return (
        <View style={[styles.container, { paddingTop:50}]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.white} />
                </TouchableOpacity>
                <Text style={styles.status}>Reproduzindo</Text>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.mainBg} />
            </View>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b2731bc19036273a7b6598331b79'}} style={playerStyles.image} />
            </View>            
            <View style={playerStyles.music}>
                <Ionicons name="layers-outline" size={24} color={colors.neutro} />
                <View style={playerStyles.musicInfo}>
                    <Text style={styles.textLarge}>Pedaços</Text>
                    <Text style={styles.subtitle}>Fernando Iglesias</Text>
                </View>
                <Entypo name="text" size={24} color={colors.neutro} />
            </View>
            <View style={playerStyles.progress}>
                <View style={playerStyles.progressLine}>
                    <View style={[playerStyles.progressLinePosition, { width: `${getProgress()}%`}]} />
                    <View style={playerStyles.progressCircle} />
                </View>
                <View style={playerStyles.progressNumbers}>
                    <Text style={playerStyles.time}>{formatTime(position)}</Text>
                    <Text style={playerStyles.time}>{formatTime(duration)}</Text>
                </View>
            </View>
            <View style={playerStyles.controls}>
                <TouchableOpacity>
                    <Ionicons name="repeat-outline" size={24} color={colors.neutro} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-back-outline" size={24} color={colors.neutro} />
                </TouchableOpacity>
                <TouchableOpacity style={playerStyles.active} onPress={onPlayPausePressed}>
                    <Ionicons name={isPlaying ? "pause-outline": "play-outline"} size={24} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-forward-outline" size={24} color={colors.neutro} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={24} color={colors.neutro} />
                </TouchableOpacity>
            </View>                    

        </View>
    )
}

export default PlayerScreen