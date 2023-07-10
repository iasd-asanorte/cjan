import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    image: {
        width: 118,
        height: 118,
        borderRadius: 10,
    },
    container: {
        width: 128,
        height: 157,
        backgroundColor: colors.secondaryBg,
        borderRadius: 10,
        justifyContent: 'center',
        marginRight: 5,
        marginBottom: 5,
    },
    info: {        
        paddingHorizontal: 5,
        flexDirection: 'column',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.white,
    },
    subtitle: {
        fontSize: 10,
        color: colors.white,
    },
});

export default styles;