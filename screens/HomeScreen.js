import React, { useEffect } from 'react'
import { 
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Schedule from '../components/Schedule';
import MusicItem from '../components/MusicItem';
import styles from '../theme/globalStyles';

const event = {
  title: 'Cantata de Natal',
  local: 'Iasd Asa Norte',
  date: '25/12/2020',
}

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

const HomeScreen = ({navigation}) => {

  useEffect(() => {    
    
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaque</Text>
      <Schedule title={event.title} local={event.local} date={event.date} /> 
      <Text style={styles.title}>Atividade Recente</Text>
      <FlatList
        data={musics}
        renderItem={({item}) => (
          <MusicItem 
            image={item.image} 
            title={item.title} 
            artist={item.artist} />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      <Text style={styles.title}>Musicas Favoritas</Text>      
      <FlatList
        data={musics}
        renderItem={({item}) => (
          <MusicItem 
            image={item.image} 
            title={item.title} 
            artist={item.artist} />
        )}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
}

export default HomeScreen