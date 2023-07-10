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
});

export default styles;