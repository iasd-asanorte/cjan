import { StyleSheet } from 'react-native';

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
});

export default styles;