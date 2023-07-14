import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: colors.secondaryBg,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 5,        
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
    },
});

export default styles;