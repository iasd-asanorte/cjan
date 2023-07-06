import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f2f2f',
        borderRadius: 10,
        padding: 20,
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
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    local: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    weekday: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    day: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    month: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default styles;