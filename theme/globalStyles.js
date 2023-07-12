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
    subtitle: {
        fontSize: 15,
        color: colors.white,
        fontWeight: 'bold',
    },
    textExtraLarge: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    status:{
        fontSize: 12,
        color: colors.neutro,        
    }
});

export default styles;
