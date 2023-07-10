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
import { login, loginWithGoogle } from "../services/UserService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../theme/loginStyles';

import Logo from '../assets/logo.png'

const SignupScreen = ({navigation}) => {
    const [textLogin, setTextLogin] = useState('')
    const [textPassword, setTextPassword] = useState('')
    const [textValidate, setTextValidate] = useState('')

    const onPressLogin = (email, pass) => {      
      login(email, pass).then((user) => {        
        console.log(user.uid)
        AsyncStorage.setItem("token", user.uid)
        navigation.navigate('Start')
      }).catch((error) => {
        console.log("Login failed:", error)
        AsyncStorage.removeItem("token")
        setTextValidate("Login ou senha errados. Tente novamente")
      })     
      
    }

    const onPressGoogle = () => {
        loginWithGoogle().then((data) => {
            console.log(data.user.email)
            AsyncStorage.setItem("token", data.user.email)
            navigation.navigate('Start')
        })
    }

    return (
          <View style={styles.screen}>
              <Image source={Logo} style={styles.logo} />
              <Text style={styles.title}>Login</Text>
              {textValidate && 
                <Text style={styles.textRecovery}>{textValidate}</Text>
              }
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
              <TouchableOpacity onPress={() => {navigation.push('Recovery')}}>
                  <Text style={styles.textRecovery}>Recuperar a senha</Text>
              </TouchableOpacity>
              <TouchableOpacity                     
                  onPress={() => {onPressLogin(textLogin, textPassword)}}
                  style={styles.button}
              >
                  <Text style={styles.textButton}>Entrar</Text>
              </TouchableOpacity>
              <View style={styles.socialLogin}>
                  <Text style={styles.textLoginWith}>Ou logar com</Text>
                  <View style={styles.icons}>
                        <TouchableOpacity onPress={()=>{onPressGoogle()}}>
                            <SimpleLineIcons name='social-google' size={30} color={"white"} />
                        </TouchableOpacity>        
                      <SimpleLineIcons name='social-facebook' size={30} color={"white"} />
                      <SimpleLineIcons name='social-twitter' size={30} color={"white"} />                
                  </View>
                  <View style={styles.register}>
                      <Text style={styles.textNosignup}>Não possui cadastro?</Text>
                      <TouchableOpacity onPress={() => {navigation.push('Signup')}}>
                          <Text style={styles.textRegister}>Registrar</Text>                    
                      </TouchableOpacity>
                  </View>            
              </View>
          </View>
    )
}

export default SignupScreen