import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginVertical: 20,        
    },
    music: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,        
    },
    musicInfo: {
        alignItems: 'center',        
    },
    progress: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,        
    },
    progressLine: {
        flexDirection: 'row',
        width: '100%',
        height: 1,
        backgroundColor: colors.neutro,
    },
    progressCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.violet,
        marginTop: -5,        
    },
    progressLinePosition: {        
        height: 2,
        backgroundColor: colors.violet,
        marginTop: -1,
    },
    progressNumbers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    time: {
        fontSize: 12,
        color: colors.neutro,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',                
    },
    active: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default styles;