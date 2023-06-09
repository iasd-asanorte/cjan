import React, { useState } from 'react'
import { 
    TouchableOpacity,
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform, 
} from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons";

import Logo from '../assets/logo.png'

const SignupScreen = ({navigation}) => {
    const [textLogin, setTextLogin] = useState('')
    const [textPassword, setTextPassword] = useState('')

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': 'height'}>
            <View style={styles.screen}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Registro</Text>
                <TextInput 
                    value={textLogin}
                    placeholder='Nome completo'
                    placeholderTextColor="#ffffff" 
                    onChangeText={setTextLogin}
                    style={styles.textInput}
                />
                <TextInput 
                    value={textLogin}
                    placeholder='Email'
                    placeholderTextColor="#ffffff" 
                    onChangeText={setTextLogin}
                    style={styles.textInput}
                />
                <TextInput                     
                    placeholder='Senha'
                    placeholderTextColor="#ffffff"                     
                    secureTextEntry={true}
                    onChangeText={setTextPassword}
                    style={styles.textInput}
                />
                <TouchableOpacity onPress={() => {navigation.push('Login')}}>
                    <Text style={styles.textRecovery}>Recuperar a senha</Text>
                </TouchableOpacity>
                <TouchableOpacity                     
                    onPress={() => {navigation.push('Login')}}
                    style={styles.button}
                >
                    <Text style={styles.textButton}>Criar</Text>
                </TouchableOpacity>
                <View style={styles.socialLogin}>
                    <Text style={styles.textLoginWith}>Ou criar conta com</Text>
                    <View style={styles.icons}>
                        <SimpleLineIcons name='social-google' size={30} color={"white"} />
                        <SimpleLineIcons name='social-facebook' size={30} color={"white"} />
                        <SimpleLineIcons name='social-twitter' size={30} color={"white"} />                
                    </View>
                    <View style={styles.register}>
                        <Text style={styles.textNosignup}>Já possui cadastro?</Text>
                        <TouchableOpacity onPress={() => {navigation.push('Login')}}>
                            <Text style={styles.textRegister}>Entrar</Text>                    
                        </TouchableOpacity>
                    </View>            
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    screen: {        
        marginTop: 40,
        alignItems: 'center',
        backgroundColor: '#2f2f2f',        
        padding: 10,
        height: '100%',
        justifyContent: 'center'
        
    },
    title: {
        padding: 20,
        fontSize: 30,
        color: '#f2f2f2'
    },
    logo:{
        height: 125,
        width: 109,
        marginLeft: 20,
    },
    textInput:{                
        borderRadius: 10,
        height: 80,
        width: '100%',
        padding: 10,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 15,
        color: '#ffffff'        
    },
    button: {
        width: '100%',
        height: 80,
        backgroundColor: '#5f3ab8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',        

    },
    textButton: {
        fontSize: 22,
        color: '#ffffff',
        fontStyle: 'normal',
        fontWeight: 700,
    },
    socialLogin: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRecovery: {
        fontSize: 14,
        color: '#aeaeae',
        fontStyle: 'normal',
        fontWeight: 600,
        marginBottom: 15,
        
    },    
    textLoginWith: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 600,
        color: '#dcdcdc',        
        marginTop: 15,
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '70%',
        marginTop: 15,
    },
    register: {
        display: 'flex',
        flexDirection: 'row',        
        marginTop: 15,
    },
    textNosignup: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
        color: '#dbdbdb',
    },
    textRegister: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
        color: '#288ce9',
    }
})