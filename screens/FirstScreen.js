import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native'

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

const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    image: {        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        
    },
    logo:{
        height: 125,
        width: 109,
        marginLeft: 20,
        position: 'absolute',
        top: 40,

    },
    title:{
        fontSize: 25,
        fontWeight: 700,
        justifyContent: 'center',
        color: '#ffffff'
    },
    paragraph: {
        fontSize: 12,
        fontWeight: 600,
        justifyContent: 'center',
        color: '#797979',
        width: '80%'
    },
    buttons:{        
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
        
    },
    button: {
        width: 50,
        backgroundColor: '#5f3ab8',
        width: 147,
        height: 73,
        borderRadius: 10,        
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: '#ffffff'
    }
});