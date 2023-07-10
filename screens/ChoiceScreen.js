import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image,
    StyleSheet,
} from 'react-native'
import styles from '../theme/choiceStyles';

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