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
import Back from '../assets/NA8cb7Kg1.png'


const ChoiceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground source={Back} resizeMode="cover" style={styles.image}>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.title}>Vamos Começar!</Text>
            <Text style={styles.paragraph}>Para ter acesso ao conteúdo do coral presente aqui, 
                por favor registre uma conta ou faça login.</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.push('Signup')}}>
                    <Text style={styles.textButton}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.push('Login')}}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default ChoiceScreen

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