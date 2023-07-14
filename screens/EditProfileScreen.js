import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    SafeAreaView,
} from 'react-native'
import {default as globalStyles} from '../theme/globalStyles'
import {default as profileStyles} from '../theme/profileStyles'
import colors from '../theme/colors'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'

const EditProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyles.container}>
        <View style={globalStyles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.white} />
            </TouchableOpacity>
            <Text style={globalStyles.text}>Editar Perfil</Text>
            <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.transparent} />
        </View>
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Text style={globalStyles.status}>Fazer upload de uma foto de perfil</Text>
                <Text style={globalStyles.subtitle}>(Opcional)</Text>
                <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b2731bc19036273a7b6598331b79'}} style={profileStyles.image} />
                <TouchableOpacity style={{marginTop: -18}}>
                    <AntDesign name="camerao" size={24} color={colors.white} />                
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
                <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="Nome completo"
                    placeholderTextColor={colors.white}                
                />
                <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="Telefone"
                    placeholderTextColor={colors.white}
                />
                <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="Endereço"
                    placeholderTextColor={colors.white}
                />
                <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="Data de Nascimento"
                    placeholderTextColor={colors.white}
                />
                <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="Naipe"
                    placeholderTextColor={colors.white}
                />
            </View>
            <TouchableOpacity style={globalStyles.button} >
                <Text style={globalStyles.textButton}>Editar</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfileScreen