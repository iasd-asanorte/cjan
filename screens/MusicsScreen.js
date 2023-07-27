import React, { useState } from 'react'
import {
    Text,
    View,
    FlatList,
    Modal,
    TouchableOpacity,
    Button,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../theme/globalStyles';
import MusicItem from '../components/MusicItem';
import RadioGroup from '../components/RadioGroup';

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

const OrderingOptions = [
    { id: 1, value: 'Recente'},
    { id: 2, value: 'Ordem Alfabética'},
    { id: 3, value: 'Favoritos'},
];

const MusicsScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [option, setOption] = useState(null);
    console.log(option);
  return (    
    <View style={styles.container}>                
        <Modal           
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.log("Modal has been closed.");            
            }}
            >
            <View style={styles.modalView}>
                <Text style={styles.text}>Organizar</Text>
                <View style={{width: '100%', flex:1, justifyContent: 'space-around'}}>
                    <RadioGroup data={OrderingOptions} onSelect={(value) => setOption(value)}/>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.smallButton}>
                    <Text style={styles.text}>OK</Text>
                </TouchableOpacity>
            </View>
        </Modal>      
            

        <View style={styles.header}>
            <Text style={styles.title}>Musicas</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
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