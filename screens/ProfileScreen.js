import React from 'react'
import {
    Image,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from '../theme/globalStyles'
import colors from '../theme/colors'
import {default as profileStyles} from '../theme/profileStyles'
import ProfileItem from '../components/ProfileItem'

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={[styles.container]}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
            <Image source={{uri: 'https://i.scdn.co/image/ab67616d0000b2731bc19036273a7b6598331b79'}} style={profileStyles.image} />
            <View style={profileStyles.naipe}>
                <Text style={profileStyles.textNaipe}>CT</Text>
            </View>
            <Text style={styles.textExtraLarge}>Cleiton Teixeira</Text>
        </View>
        <ProfileItem 
            icon="edit"
            item="Editar perfil"
            subtitle="Edite nome, foto, senha, etc."
            target="Player"
        />
        <ProfileItem 
            icon="help-circle"
            item="Ajuda"
            subtitle="Tire suas dúvidas sobre o app."
            target="Player"
        />
        <ProfileItem 
            icon="hash"
            item="Sobre"
            subtitle="Versão, suporte e staff."
            target="Player"
        />
        <ProfileItem 
            icon="log-out"
            item="Log Out"
            subtitle="Sair da sua conta no app."
            target="Player"
        />
    </ScrollView>
  )
}

export default ProfileScreen