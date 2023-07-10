import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryBg,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        flex: 1,
        justifyContent: 'center',        
    },
    data: {        
        alignItems: 'center',
        justifyContent: 'center',        
        backgroundColor: "#efefef",
        borderRadius: 10,
        paddingHorizontal: 10,       
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',        
    },
    subtitle: {
        fontSize: 14,
        color: '#ffffff',        
    },
    local: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    weekday: {
        fontSize: 20,
        color: colors.greyOff,
        fontWeight: 'bold',
        marginBottom: -10,
    },
    day: {
        fontSize: 40,
        color: colors.greyOff,
        fontWeight: 'bold',        
    },
    month: {
        fontSize: 20,
        color: colors.greyOff,
        fontWeight: 'bold',
        marginBottom: -10,
    },
});

export default styles;