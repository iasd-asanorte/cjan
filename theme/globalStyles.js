import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainBg,        
        padding: 20,                
    },
    title: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textLarge: {
        fontSize: 35,
        color: colors.white,
        fontWeight: 'bold',
        marginVertical: 3,
    },    
    textExtraLarge: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 15,
        color: colors.white,
        fontWeight: 'bold',        
    },
    subtitle: {
        fontSize: 8,
        color: colors.neutro,
        fontWeight: 'bold',
    },
    status:{
        fontSize: 12,
        color: colors.neutro,        
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
});

export default styles;
