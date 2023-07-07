import { StyleSheet } from 'react-native';

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

export default styles;