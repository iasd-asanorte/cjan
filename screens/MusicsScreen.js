import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../theme/globalStyles';
import MusicItem from '../components/MusicItem';

const musics = [
    {
      id: 1,
      title: 'Grande amor',
      artist: 'Quarteto Vital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgUuwR55MZqsDcYDdou7mQYEWR9JgOxJOctYcsYDjgFEVl81q4ctSu7Pf11omJt3MFII',
    },
    {
      id: 2,
      title: 'Grande amor',
      artist: 'Quarteto Vital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgUuwR55MZqsDcYDdou7mQYEWR9JgOxJOctYcsYDjgFEVl81q4ctSu7Pf11omJt3MFII',
    },
    {
      id: 3,
      title: 'Grande amor',
      artist: 'Quarteto Vital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgUuwR55MZqsDcYDdou7mQYEWR9JgOxJOctYcsYDjgFEVl81q4ctSu7Pf11omJt3MFII',
    },
    {
      id: 4,
      title: 'Grande amor',
      artist: 'Quarteto Vital',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgUuwR55MZqsDcYDdou7mQYEWR9JgOxJOctYcsYDjgFEVl81q4ctSu7Pf11omJt3MFII',
    },
  ]

const MusicsScreen = ({navigation}) => {
  return (    
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Musicas</Text>
            <Ionicons name="settings-outline" size={24} color="white" />
        </View>
        <View style={{alignItems: 'center'}}>
            <FlatList
                data={musics}
                renderItem={({item}) => (
                <MusicItem 
                    image={item.image} 
                    title={item.title} 
                    artist={item.artist} />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
        

    </View>
  )
}

export default MusicsScreen