import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native'
import styles from '../theme/firstStyles';

import Logo from '../assets/logo.png'
import Back from '../assets/K5EBaDlM1.png'


const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.title}>Tudo para os coristas em apenas um lugar.</Text>
            <Text style={styles.paragraph}>Aqui no app oficial do Coral Jovem da Asa Norte, você possui
            acesso a kits, músicas, partituras, cifras, datas e muito mais.</Text>
            <View style={styles.buttons}>                
                <TouchableOpacity style={styles.button} onPress={() => {navigation.push('Choice')}}>
                    <Text style={styles.textButton}>Começar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default FirstScreen