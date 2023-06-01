import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import Database from '../services/firebase';

const LoginScreen = () => {
  const [musicas, setMusicas] = useState([])

  useEffect(()=>{
    const loadMusics = async () => {
      const query = await getDocs(collection(Database, "musicas"));
      const list = []
      query.forEach((doc) => {        
        list.push({...doc.data(), id: doc.id});
      });
      setMusicas(list)      
    };
    loadMusics();
  }, []);

  return (
    <>
      {musicas.length > 0 ? (
        <FlatList style={styles.lista}
          data={musicas}
          renderItem={(musica) => (
            <View style={styles.item}>
              <Text style={styles.text}>{musica.item.titulo}</Text>
            </View>
          )}
          keyExtractor={musica => musica.id}        
        />        
        
        ): <Text>Nenhum arquivo encontrado</Text>
      }
      
    </>
    
  )

}
export default LoginScreen

const styles = StyleSheet.create({
  text: {
    color: '#000000'
  },
  item: {
    backgroundColor: '#ff0000',
    marginBotton: 5,
    padding: 10,
    borderWidth: 5,
  }
})