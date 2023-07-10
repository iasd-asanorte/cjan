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
import { signUp } from "../services/UserService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../theme/signupStyles';

import Logo from '../assets/logo.png'

const SignupScreen = ({navigation}) => {
    const [textName, setTextName] = useState('')
    const [textEmail, setTextEmail] = useState('')
    const [textPassword, setTextPassword] = useState('')

    const onPressSignup = (email, pass, name) => {
        signUp(email, pass, name).then((user) => {
            AsyncStorage.setItem("token", user.uid)
            navigation.navigate('Start')  
        }).catch((error) => {
            console.log("Register failed:", error)                        
        }) 
    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': 'height'}>
            <View style={styles.screen}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.title}>Registro</Text>
                <TextInput 
                    value={textName}
                    placeholder='Nome completo'
                    placeholderTextColor="#ffffff" 
                    onChangeText={setTextName}
                    style={styles.textInput}
                />
                <TextInput 
                    value={textEmail}
                    placeholder='Email'
                    placeholderTextColor="#ffffff" 
                    onChangeText={setTextEmail}
                    style={styles.textInput}
                />
                <TextInput                     
                    placeholder='Senha'
                    placeholderTextColor="#ffffff"                     
                    secureTextEntry={true}
                    onChangeText={setTextPassword}
                    style={styles.textInput}
                />
                
                <TouchableOpacity                     
                    onPress={() => {onPressSignup(textEmail, textPassword, textName)}}
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